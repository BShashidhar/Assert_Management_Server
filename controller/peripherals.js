const Peripherals = require('../model/peripherals');

function addPeripherals(req, res) {
    Peripherals.create({
        name: req.body.peripheral_name,
        key: req.body.peripheral_key,
        peripheral_key: req.body.key
    }).then(() => {
        getAllPeripherals(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllPeripherals(req, res) {
    Peripherals.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updatePeripherals(req, res) {
    Peripherals.update(
        { name: req.body.peripheral_name, key: req.body.peripheral_key, peripheral_key: req.body.key },
        { where: { id: req.body.peripheral_id } }
    ).then(() => {
        getAllPeripherals(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deletePeripherals(req, res) {
    Peripherals.update({
        delete_flag: true
    }, {
        where: { id: req.body.peripheral_id }
    }).then(() => {
        getAllPeripherals(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addPeripherals: addPeripherals,
    getAllPeripherals: getAllPeripherals,
    updatePeripherals: updatePeripherals,
    deletePeripherals: deletePeripherals
}