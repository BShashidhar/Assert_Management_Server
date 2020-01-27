const { sequelize, DataTypes } = require('../config/db')

const AssetGroup = sequelize.define('asset_group', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    subcategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "subcategory",
            key: "id"
        }
    },
    delete_flag: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = AssetGroup