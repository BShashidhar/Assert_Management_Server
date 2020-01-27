const AssetGroup = require('../model/asset_group');

function addAssetGroup(req, res) {
    AssetGroup.create({
        name: req.body.asset_group_name,
        subcategory_id: req.body.subcategory_id
    }).then(row => {
        getAllAssetGroup(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllAssetGroup(req, res) {
    AssetGroup.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateAssetGroup(req, res) {
    AssetGroup.update({
        name: req.body.asset_group_name,
        subcategory_id: req.body.subcategory_id
    }, { where: { id: req.body.asset_group_id } }
    ).then(() => {
        getAllAssetGroup(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteAssetGroup(req, res) {
    AssetGroup.destroy({
        delete_flag: true
    }, { where: { id: req.body.asset_group_id } }
    ).then(() => {
        getAllAssetGroup(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addAssetGroup: addAssetGroup,
    getAllAssetGroup: getAllAssetGroup,
    updateAssetGroup: updateAssetGroup,
    deleteAssetGroup: deleteAssetGroup
}