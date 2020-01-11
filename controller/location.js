const Location = require('../model/location');

module.exports = {
    addLocation: (req, res) => {
        Location.create({
            name: req.body.location_name
        }).then(row => {
            Location.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllLocation: (req, res) => {
        Location.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateLocation: (req, res) => {
        Location.update(
            { name: req.body.location_name },
            { where: { id: req.body.location_id } }
        ).then(count => { return Location.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteLocation: (req, res) => {
        Location.destroy({
            where: { id: req.body.location_id }
        }).then(result => {
            Location.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}