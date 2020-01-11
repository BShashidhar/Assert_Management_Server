const router = require('express').Router();
const { getAllAssetGroup, addAssetGroup, updateAssetGroup, deleteAssetGroup } = require('../../controller/asset_group')

router.get('/getAll', getAllAssetGroup);

router.post('/add', addAssetGroup);

router.post('/update', updateAssetGroup)

router.post('/delete', deleteAssetGroup)

module.exports = router;