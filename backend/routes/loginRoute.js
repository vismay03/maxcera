const router = require('express').Router();
const loginModel = require('../models/loginModel');
router.get('/adminLogin' , async (req, res)  => {
    try{
        const login = await loginModel.find({});
        
        res.json(login);
    }
    catch(err){
        res.status(500).send({ get_error: 'error' });
    }
});

module.exports = router;