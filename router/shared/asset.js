const router = require('express').Router();

const { getAllAsset, addAsset, getAssetById, updateAsset, deleteAsset, getNumber } = require('../../controller/asset')

router.get('/getAll', getAllAsset);

router.get('/',getAssetById)

router.post('/add', addAsset);

router.post('/update', updateAsset)

router.post('/delete', deleteAsset)

router.post('/getNumber', getNumber)

module.exports = router;