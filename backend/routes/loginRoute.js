const router = require('express').Router();
const loginModel = require('../models/loginModel');
router.get('/adminlogin' , async (req, res)  => {
    try{
        const login = await loginModel.find({});
        
        return res.json(login);
    }
    catch(err){
        return res.status(500).send({ get_error: 'error' });
    }
});

module.exports = router;