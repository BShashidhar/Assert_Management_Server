const Status = require('../model/status');

module.exports = {
    addStatus: (req, res) => {
        Status.create({
            name: req.body.status_name
        }).then(row => {
            Status.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllStatus: (req, res) => {
        Status.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateStatus: (req, res) => {
        Status.update(
            { name: req.body.status_name },
            { where: { id: req.body.status_id } }
        ).then(count => { return Status.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteStatus: (req, res) => {
        Status.destroy({
            where: { id: req.body.status_id }
        }).then(result => {
            Status.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}