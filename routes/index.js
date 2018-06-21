var express = require('express');
var router = express.Router();

/* GET url parameter: /xxx. */
//router.get('/:myname', function(req, res, next) {
//  res.render('index', { title: req.params.myname });
//});

/* GET query parameter: ?myname=xxx */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: req.query.myname + ' !!!' });
//});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'DoctorBot17' });
});

router.get('/termofservice', function(req, res, next) {
  res.render('termofservice', { title: 'DoctorBot17' });
});

module.exports = router;
