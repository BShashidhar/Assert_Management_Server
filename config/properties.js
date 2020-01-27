const { sequelize } = require('./db');
const {QueryTypes} = require('sequelize')

module.exports = {
    getDataWithQuery: async (data, replacements = {}) => {
        var { query, type } = data
        var result = await sequelize.query(
            query,
            {
                replacements: replacements,
                type: type
            }
        );
        return result
    },

    getAssetDetailsByAssetId: {
        query: `
        SELECT 
            c.name as category, s.name as subCategory, 
            s.key as subkey, ag.name as assetGroup, 
            e.name as employeeName, di.name as division, 
            de.name as department, des.name as designation,
            a.acquired_date as acquiredDate, a.issue_date as issueDate,
            a.asset_id as assetId, a.asset_details as assetDetails,
            a.invoice_no as invoiceNo, a.model_no as modelNo, a.serial_no as serialNo,
            a.grcir_no as grcirNo, a.grcir_date as grcirDate, a.po_no as poNo, a.po_date as poDate,
            a.price, a.warrenty, v.name as vendor, l.name as location 
        FROM 
            asset a, category c, subcategory s, asset_group ag,
            employee e, division di, department de, designation des,
            vendor v, location l
        where 
            a.category_id = c.id and a.subcategory_id = s.id
            and a.division_id = di.id and a.asset_group_id = ag.id
            and a.department_id=de.id and e.designation_id = des.id
            and a.employee_id = e.id and a.vendor_id=v.id
            and a.location_id=l.id and 
        a.asset_id = :asset_id`,
        type: QueryTypes.SELECT
    }
}

