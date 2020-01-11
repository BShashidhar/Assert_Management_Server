const {sequelize, DataTypes} = require('../config/db')

const Mrrpo= sequelize.define('mrrpo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asset_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    grcirF_no: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    grcirF_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    poF_no: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    poF_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    billF_no: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    billF_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    supplier: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    received: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    accepted: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    timestamps: false,
    freezeTableName : true
})

module.exports = Mrrpo