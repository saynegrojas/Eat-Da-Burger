const express = require('express');

const router = express.Router();
const burger = require('../models/burger.js');

//get route (index)
router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    burger.all(burgerData => {
        res.render('index', {burger_data: burgerData});
    });
});

//post
router.post('/burgers/create', (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect('/');
        
    });
});

router.put('/burger/:id', (req, res) => {
    burger.update(req.params.id, (result) =>{
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;