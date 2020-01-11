const {sequelize, DataTypes} = require('../config/db')

const AssetPeripherals = sequelize.define('asset_peripherals',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "asset",
            key: "id"
        }
    },
    peripherals_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "peripherals",
            key: "id"
        }
    },
    serial_no: {
        type: DataTypes.STRING(50)
    },
    asset_peripheral_id : {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = AssetPeripherals