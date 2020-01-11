const {sequelize, DataTypes} = require('../config/db')

const Peripherals = sequelize.define('peripherals',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    key: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    peripheral_key: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = Peripherals