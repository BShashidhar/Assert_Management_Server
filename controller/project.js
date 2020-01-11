const Project = require('../model/project');

module.exports = {
    addProject: (req, res) => {
        Project.create({
            name: req.body.project_name
        }).then(row => {
            Project.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllProject: (req, res) => {
        Project.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateProject: (req, res) => {
        Project.update(
            { name: req.body.project_name },
            { where: { id: req.body.project_id } }
        ).then(count => { return Project.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteProject: (req, res) => {
        Project.destroy({
            where: { id: req.body.project_id }
        }).then(result => {
            Project.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}