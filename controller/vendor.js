const Vendor = require('../model/vendor');

function addVendor(req, res) {
    Vendor.create({
        name: req.body.vendor_name
    }).then(() => {
        getAllVendor(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllVendor(req, res) {
    Vendor.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateVendor(req, res) {
    Vendor.update(
        { name: req.body.vendor_name },
        { where: { id: req.body.vendor_id } }
    ).then(() => {
        getAllVendor(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteVendor(req, res) {
    Vendor.update({
        delete_flag: true
    }, {
        where: { id: req.body.vendor_id }
    }).then(() => {
        getAllVendor(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addVendor: addVendor,
    getAllVendor: getAllVendor,
    updateVendor: updateVendor,
    deleteVendor: deleteVendor
}