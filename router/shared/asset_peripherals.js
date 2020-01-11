const router = require('express').Router();
const { getPeripheralByAsset, getAllAssetPeripheral } = require('../../controller/asset_peripherals')


router.post('/getPeripheralByAsset', getPeripheralByAsset);
router.post('/getAllAssetPeripheral', getAllAssetPeripheral);

module.exports = router;