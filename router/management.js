const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')

const assetGroupRouter = require('./shared/asset_group');
const assetPeripheralRouter = require('./shared/asset_peripherals');
const categoryRouter = require('./shared/category');
const departmentRouter = require('./shared/department');
const designationRouter = require('./shared/designation');
const divisionRouter = require('./shared/division');
const projectRouter = require('./shared/project');
const peripheralsRouter = require('./shared/peripherals');
const statusRouter = require('./shared/status');
const subcategoryRouter = require('./shared/subcategory');
const assetRouter = require('./shared/asset');
const employeeRouter = require('./shared/employee');
const mrrpoRouter = require('./shared/mrrpo');
const vendorRouter=require('./shared/vendor');
const locationRouter=require('./shared/location');


router.use('/asset', assetRouter);
router.use('/assetGroup', assetGroupRouter);
router.use('/assetPeripheral', assetPeripheralRouter);
router.use('/category', categoryRouter);
router.use('/department', departmentRouter);
router.use('/designation', designationRouter);
router.use('/division', divisionRouter);
router.use('/project', projectRouter);
router.use('/peripherals', peripheralsRouter);
router.use('/status', statusRouter);
router.use('/subcategory', subcategoryRouter);
router.use('/employee', employeeRouter);
router.use('/mrrpo',mrrpoRouter);
router.use('/vendor',vendorRouter);
router.use('/location',locationRouter);


const Admin = require('../model/admin');
const Employee = require('../model/employee');
const IndentDetails = require('../model/indent_details');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../public/files');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('file');

router.post('/uploadFile', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.status(501).json({ status: false, error: err });
        }
        return res.json({ status: true, originalname: req.file.originalname, uploadname: req.file.filename });
    });
});


router.post('/downloadFile', (req, res) => {
    let filepath = path.join(__dirname + '/../public/files') + '//'+ req.body.filename;
    res.sendFile(filepath);
});

router.get('/getAllFileNames', (req,res)=>{
    let folder = path.join(__dirname + '/../public/files');
    res.status(200).json(fs.readdirSync(folder));
});

router.get('/getAllIndentNo', (req,res)=>{
    IndentDetails.findAll({
        attributes:['indent_no'],
    }).then(indentno=>{
        res.status(200).json({ result: indentno })
    }).catch(err=>{
        res.status(500).send(err)
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body
    Admin.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(result => {
        if (result) {
            res.status(200).send(result);
        }
        else res.status(401).send("Unauthorized");
    }).catch(err => {
        res.status(500).send(err)
    });
});

router.post('/addEmployee', (req, res) => {
    const { emp_id, name, username, department_id } = req.body
    var employee = {
        emp_id: emp_id,
        name: name,
        username: username,
        password: emp_id,
        department_id: department_id
    }

    Employee.create(employee)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
})

function isAuthorized(req, res, next) {
    var id = req.headers.authorization;
    if (id) {
        Admin.findOne({
            where: {
                id: id
            }
        }).then(result => {
            if (result) next();
            else res.status(401).send("Unauthorized");
        });
    }
    else res.status(401).send("Unauthorized");
}

module.exports = router