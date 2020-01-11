const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database')

const sequelize = new Sequelize(db.database,db.username,db.password,{
    host: db.host,
    dialect: db.dialect,
    logging: false
});

sequelize.authenticate().then(()=>{
    console.log(`${db.database} is connected`)
}).catch( err => {
    console.error('Unable to connect database :',err)
})

sequelize.sync({force: false})

module.exports.sequelize = sequelize
module.exports.DataTypes = DataTypes