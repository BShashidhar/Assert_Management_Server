const {sequelize, DataTypes} = require('../config/db')

const Admin = sequelize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = Admin