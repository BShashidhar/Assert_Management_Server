const Vendor = require('../model/vendor');

module.exports = {
    addVendor: (req, res) => {
        Vendor.create({
            name: req.body.vendor_name
        }).then(row => {
            Vendor.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllVendor: (req, res) => {
        Vendor.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateVendor: (req, res) => {
        Vendor.update(
            { name: req.body.vendor_name },
            { where: { id: req.body.vendor_id } }
        ).then(count => { return Vendor.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteVendor: (req, res) => {
        Vendor.destroy({
            where: { id: req.body.vendor_id }
        }).then(result => {
            Vendor.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}