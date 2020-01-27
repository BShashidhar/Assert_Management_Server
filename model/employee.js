const { sequelize, DataTypes } = require('../config/db')

const Employee = sequelize.define('employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emp_id: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "department",
            key: "id"
        }
    },
    designation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "designation",
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

module.exports = Employee