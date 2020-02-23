const express = require("express");
const listPrimes = require("../list-prime-numbers");
const router = express.Router();

router.post("/calculs", function(req, res) {
  if (req.body.number > 0 && Number.isInteger(req.body.number)) {
    res.send({
      squareRoot: Math.sqrt(req.body.number),
      primes: listPrimes(req.body.number)
    });
  } else {
    res.status(400).send({ error: "Input a positive integer" });
  }
});

module.exports = router;
