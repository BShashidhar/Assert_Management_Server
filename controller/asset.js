const Asset = require('../model/asset')
const AssetPeripherals = require('../model/asset_peripherals')
const Peripherals = require('../model/peripherals')
const { Op } = require('sequelize')
const { getDataWithQuery, getAssetDetailsByAssetId } = require('../config/properties')

module.exports = {
    addAsset: (req, res) => {
        var { asset_id, asset_details, invoice_no, model_no, serial_no, grcir_no, grcir_date, po_no, po_date, price,
            warrenty, vendor, location, remark, peripherals, category_id, subcategory_id,
            asset_group_id, division_id, department_id, project_id, indent_no, indent_date, group, employee_id, username,
            acquired_date, issue_date, record } = req.body
        let assetId = 0
        if (warrenty == "") warrenty = null;
        if (po_date == "") po_date = null;
        if (indent_date == "") indent_date = null;
        Asset.findAndCountAll({
            attributes: ["asset_id"],
            where: { asset_id: { [Op.like]: asset_id + "%" } }
        }).then(result => {
            let tempid = result.count + 1;
            for (let index = 0; index < record; index++) {
                assetId = asset_id + "-" + tempid;
                let asset = {
                    category_id: category_id,
                    subcategory_id: subcategory_id,
                    asset_group_id: asset_group_id,
                    division_id: division_id,
                    department_id: department_id,
                    project_id: project_id,
                    employee_id: employee_id,
                    username: username,
                    acquired_date: acquired_date,
                    issue_date: issue_date,
                    indent_id: indent_no,
                    indent_date: indent_date,
                    group: group,
                    asset_id: assetId,
                    asset_details: asset_details,
                    invoice_no: invoice_no,
                    model_no: model_no,
                    serial_no: serial_no,
                    grcir_no: grcir_no,
                    grcir_date: grcir_date,
                    po_no: po_no,
                    po_date: po_date,
                    price: price,
                    warrenty: warrenty,
                    vendor_id: vendor,
                    location_id: location,
                    remark: remark
                }
                Asset.create(asset).then(row => {
                    let len = peripherals.length;
                    if (len) {
                        for (let i = 0; i < len; i++) {
                            var asset_peripheral_id = row.asset_id + "/" + peripherals[i].asset_peripheral_id
                            let per = {
                                asset_id: row.id,
                                peripherals_id: peripherals[i].peripherals_id,
                                serial_no: peripherals[i].serial_no,
                                asset_peripheral_id: asset_peripheral_id
                            }
                            AssetPeripherals.create(per);
                        }
                    }
                    res.status(200).json({ result: row })
                }).catch(err => {
                    res.status(500).json({ result: err })
                })
                tempid++;
            }

        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllAsset: (req, res) => {
        Asset.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    // getAssetById: (req, res) => {
    //     Asset.findOne({ where: { id: req.query.id } })
    //         .then(result => {
    //             res.status(200).json({ result: result })
    //         })
    //         .catch(err => {
    //             res.status(500).json({ result: err.message })
    //         })
    // },
    getAssetById: async (req, res) => {
        var asset_id = req.body.asset_id;
        var projectName = null;
        await Asset.findOne({
            attributes: ['project_id'],
            where: { asset_id }
        }).then(asset => {
            if (asset.project_id != null) {
                Project.findOne({
                    where: { id: asset.project_id }
                }).then(project => {
                    projectName = project.name
                })
            }
        });
        var result = await getDataWithQuery(getAssetDetailsByAssetId, { asset_id });
        if(projectName != null) result[0]['project'] = projectName;
        res.status(200).json(result[0])

    },

    updateAsset: (req, res) => {
        var { asset_id, asset_details, invoice_no, model_no, serial_no, grcir_no, grcir_date, po_no, po_date, price,
            warrenty, vendor, location, remark, peripherals, category_id, subcategory_id,
            asset_group_id, division_id, department_id, project_id, indent_no, indent_date, group, employee_id, username,
            acquired_date, issue_date, id } = req.body
        let asset = {
            category_id: category_id,
            subcategory_id: subcategory_id,
            asset_group_id: asset_group_id,
            division_id: division_id,
            department_id: department_id,
            project_id: project_id,
            employee_id: employee_id,
            username: username,
            acquired_date: acquired_date,
            issue_date: issue_date,
            indent_id: indent_no,
            indent_date: indent_date,
            group: group,
            asset_id: asset_id,
            asset_details: asset_details,
            invoice_no: invoice_no,
            model_no: model_no,
            serial_no: serial_no,
            grcir_no: grcir_no,
            grcir_date: grcir_date,
            po_no: po_no,
            po_date: po_date,
            price: price,
            warrenty: warrenty,
            vendor_id: vendor,
            location_id: location,
            remark: remark
        }

        Asset.update(asset, { where: { id: id } })
            .then(result => {
                res.status(200).json({ result: result })
            }).catch(err => {
                res.status(500).json({ result: err })
            })
        AssetPeripherals.destroy({ where: { asset_id: id } })
        let len = peripherals.length;
        if (len) {
            for (let i = 0; i < len; i++) {
                Peripherals.findOne({
                    attributes: ["peripheral_key"],
                    where: {
                        id: peripherals[i].peripherals_id
                    }
                })
                    .then(result => {
                        var asset_peripheral_id = asset_id + "/" + result.peripheral_key
                        let per = {
                            asset_id: id,
                            peripherals_id: peripherals[i].peripherals_id,
                            serial_no: peripherals[i].serial_no,
                            asset_peripheral_id: asset_peripheral_id
                        }
                        AssetPeripherals.create(per);
                    })
            }
        }
    },

    getNumber: (req, res) => {
        Asset.findAndCountAll({
            attributes: ["asset_id"],
            where: { asset_id: { [Op.like]: req.body.key + "%" } }
        }).then(result => {
            res.status(200).json({ result: result.count })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteAsset: (req, res) => {
        Asset.destroy({ where: { id: req.body.id } }).then(result => {
            Asset.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}
