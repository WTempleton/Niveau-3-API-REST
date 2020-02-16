const express = require('express');
const listePremiers = require('../liste_nbr_prms');
const router = express.Router();

router.post('/calculs', function(req,res){
    if (req.body.nombre > 0 && Number.isInteger(req.body.nombre)){
        res.send({
            squareRoot: Math.sqrt(req.body.nombre),
            primes: listePremiers(req.body.nombre)
        })
    }
    else {
        res.status(400).send({error: "Fournir un entier positif"})
    }
});

module.exports = router;