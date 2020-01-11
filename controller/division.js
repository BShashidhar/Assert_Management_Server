const Division = require('../model/division');

module.exports = {
    addDivision: (req, res) => {
        Division.create({
            name: req.body.division_name
        }).then(row => {
            Division.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllDivision: (req, res) => {
        Division.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateDivision: (req, res) => {
        Division.update(
            { name: req.body.division_name },
            { where: { id: req.body.division_id } }
        ).then(count => { return Division.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteDivision: (req, res) => {
        Division.destroy({
            where: { id: req.body.division_id }
        }).then(result => {
            Division.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}