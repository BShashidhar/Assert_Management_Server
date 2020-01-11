const {sequelize, DataTypes} = require('../config/db')

const Category = sequelize.define('category',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = Category