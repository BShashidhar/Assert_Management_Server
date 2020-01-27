const Project = require('../model/project');

function addProject(req, res) {
    Project.create({
        name: req.body.project_name
    }).then(() => {
        getAllProject(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllProject(req, res) {
    Project.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateProject(req, res) {
    Project.update(
        { name: req.body.project_name },
        { where: { id: req.body.project_id } }
    ).then(() => {
        getAllProject(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteProject(req, res) {
    Project.update({
        delete_flag: true
    }, {
        where: { id: req.body.project_id }
    }).then(() => {
        getAllProject(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addProject: addProject,
    getAllProject: getAllProject,
    updateProject: updateProject,
    deleteProject: deleteProject
}