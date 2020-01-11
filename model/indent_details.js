const {sequelize, DataTypes} = require('../config/db')

const Status = require('./status')

const IndentDetails = sequelize.define('indent_details', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    indent_no: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    budget_year: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "employee",
            key: "id"
        }
    },
    material_desc: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    manufacturer: {
        type: DataTypes.STRING(50)
    },
    suggested_vendors: {
        type: DataTypes.STRING(100)
    },
    remarks: {
        type: DataTypes.STRING(100)
    },
    status_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "status",
            key: "id"
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()")
    },
    updated_at: {
        type:DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()")
    },
    flag: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = IndentDetails