const Company = require('../models/company');

exports.postCompany = (req,res,next) => {
    const name = req.body.name;
    const address = req.body.address;
    const status = req.body.status;
    
    const company = new Company({
        name : name,
        address:address,
        status : status
    })

    company
        .save()
        .then(company => {
            res.status(201).json({
                message : "company added successfully",
                company : company
            });
        })
        .catch(err => {
            err.message = 'company not created!';
            next(err);
        })
};

exports.getCompanies = (req, res, next) => {
    Company
        .find()
        .then(result => {
            res.status(200).json({
                companies : result
            })
        })
        .catch(err => {
            next(err);
        })
};
