const {sequelize, DataTypes} = require('../config/db')

const Subcategory = sequelize.define('subcategory',{
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
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "category",
            key: "id"
        }
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = Subcategory