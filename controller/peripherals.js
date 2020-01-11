const Peripherals = require('../model/peripherals');

module.exports = {
    addPeripherals: (req, res) => {
        Peripherals.create({
            name: req.body.peripheral_name,
            key: req.body.peripheral_key,
            peripheral_key: req.body.key
        }).then(row => {
            Peripherals.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllPeripherals: (req, res) => {
        Peripherals.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updatePeripherals: (req, res) => {
        Peripherals.update(
            { name: req.body.peripheral_name, key: req.body.peripheral_key, peripheral_key: req.body.key },
            { where: { id: req.body.peripheral_id } }
        ).then(result => {
            Peripherals.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deletePeripherals: (req, res) => {
        Peripherals.destroy({
            where: { id: req.body.peripheral_id }
        }).then(result => {
            Peripherals.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}