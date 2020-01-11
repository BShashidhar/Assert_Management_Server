const router = require('express').Router();
const { getAllCategory, addCategory, updateCategory, deleteCategory } = require('../../controller/category')

router.get('/getAll', getAllCategory);

router.post('/add', addCategory);

router.post('/update', updateCategory)

router.post('/delete', deleteCategory)

module.exports = router;