const Location = require('../model/location');

function addLocation(req, res) {
    Location.create({
        name: req.body.location_name
    }).then(row => {
        getAllLocation(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllLocation(req, res) {
    Location.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateLocation(req, res) {
    Location.update(
        { name: req.body.location_name },
        { where: { id: req.body.location_id } }
    ).then(() => {
        getAllLocation(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteLocation(req, res) {
    Location.update({
        delete_flag: true
    }, {
        where: { id: req.body.location_id }
    }).then(() => {
        getAllLocation(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addLocation: addLocation,
    getAllLocation: getAllLocation,
    updateLocation: updateLocation,
    deleteLocation: deleteLocation
}