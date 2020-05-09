var express = require('express');
var router = express.Router();

/* POST announcements changes. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
