const AssetPeripheral = require('../model/asset_peripherals');

module.exports = {
    getPeripheralByAsset: (req, res) => {
        const { asset_id } = req.body
        AssetPeripheral.findAll({
            where: { asset_id: asset_id }
        })
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    getAllAssetPeripheral: (req, res) => {
        AssetPeripheral.findAll().then(result => {
            res.status(200).json({ result: result })
        })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    }
}