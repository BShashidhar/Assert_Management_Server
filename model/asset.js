const {sequelize, DataTypes} = require('../config/db')

const Asset = sequelize.define('asset', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id"
        }
    },
    subcategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "subcategory",
            key: "id"
        }
    },
    asset_group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "asset_group",
            key: "id"
        }
    },
    division_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "division",
            key: "id"
        }
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "department",
            key: "id"
        }
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "project",
            key: "id"
        }
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "employee",
            key: "id"
        }
    },
    username:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    acquired_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    issue_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    indent_id: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    indent_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    asset_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    asset_details: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    invoice_no:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    model_no: {
        type: DataTypes.STRING(30)
    },
    serial_no: {
        type: DataTypes.STRING(30)
    },
    grcir_no: {
        type: DataTypes.STRING(30)
    },
    grcir_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    po_no: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    po_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    warrenty: {
        type: DataTypes.INTEGER
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'vendor',
            key: 'id'
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "location",
            key: "id"
        }
    },
    remark: {
        type: DataTypes.STRING(300)
    }
},{
    timestamps: false,
    freezeTableName : true
})

module.exports = Asset