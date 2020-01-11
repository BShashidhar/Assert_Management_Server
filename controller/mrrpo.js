const Mrrpo = require('../model/mrrpo')

module.exports = {
    addGrcir: (req, res) => {
        const { assetF_id,grcirF_no,grcirF_date,poF_no,poF_date,billF_no,billF_date,supplier,description,quantity,received,accepted,rate,val } = req.body
        Mrrpo.create({
            asset_id:assetF_id,
            grcirF_no : grcirF_no,
            grcirF_date : grcirF_date,
            poF_no: poF_no,
            poF_date: poF_date,
            billF_no: billF_no,
            billF_date: billF_date,
            supplier: supplier,
            description: description,
            quantity: quantity,
            received:received,
            accepted:accepted,
            rate: rate,
            value:val
        }).then(row => {
            Mrrpo.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            console.log('Error')
            res.status(500).json({ result: err })
        })
    }
}