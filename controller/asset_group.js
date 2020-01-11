const AssetGroup = require('../model/asset_group');

module.exports = {
    addAssetGroup: (req, res) => {
        AssetGroup.create({
            name: req.body.asset_group_name,
            subcategory_id: req.body.subcategory_id
        }).then(row => {
            AssetGroup.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllAssetGroup: (req, res) => {
        AssetGroup.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateAssetGroup: (req, res) => {
        AssetGroup.update({
            name: req.body.asset_group_name,
            subcategory_id: req.body.subcategory_id
        },
            { where: { id: req.body.asset_group_id } }
        ).then(count => { return AssetGroup.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteAssetGroup: (req, res) => {
        AssetGroup.destroy({
            where: { id: req.body.asset_group_id }
        }).then(result => {
            AssetGroup.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}