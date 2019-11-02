const express = require('express');

const companyController = require('../controllers/companyController');
const router = express.Router();

router.post('/company/create', companyController.postCompany);
router.get('/companies', companyController.getCompanies);
module.exports = router; 
