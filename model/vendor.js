const { sequelize, DataTypes } = require('../config/db')

const  Vendor= sequelize.define('vendor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = Vendor