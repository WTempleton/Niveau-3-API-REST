const express = require('express');
const listePremiers = require('../liste_nbr_prms');
const router = express.Router();

router.post('/calculs', function(req,res){
    res.send({
        squareRoot: Math.sqrt(req.body.nombre),
        primes: listePremiers(req.body.nombre)
    })
});

module.exports = router;