var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello from RESPOND users/ !!!');
});

router.get('/cool', function(req, res, next) {
  res.send('This is so cool!!!');
});

module.exports = router;
