const {sequelize, DataTypes} = require('../config/db')

const Project = sequelize.define('project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = Project