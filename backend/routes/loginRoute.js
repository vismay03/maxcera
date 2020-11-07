const router = require('express').Router();
const loginModel = require('../models/loginModel');
router.get('/adminLogin' , async (req, res)  => {
    try{
        const login = await loginModel.find({});
        console.log(login);
        res.json(login);
        res.redirect('/');
    }
    catch(err){
        res.status(500).send({ get_error: 'error' });
    }
});

module.exports = router;