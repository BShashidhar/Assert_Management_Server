const router = require('express').Router();
const { getAllSubCategory, addSubCategory, updateSubCategory, deleteSubCategory } = require('../../controller/subcategory')

router.get('/getAll', getAllSubCategory);

router.post('/add', addSubCategory);

router.post('/update', updateSubCategory);

router.post('/delete', deleteSubCategory);

module.exports = router;