const router = require('express').Router();
const { getAllProject, addProject, updateProject, deleteProject } = require('../../controller/project')

router.get('/getAll', getAllProject);

router.post('/add', addProject);

router.post('/update', updateProject)

router.post('/delete', deleteProject)

module.exports = router;