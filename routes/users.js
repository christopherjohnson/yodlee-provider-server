var express = require('express');
var router = express.Router();
const co = require('co');
var yodlee = require('../yodleeService');

/* GET users listing. */

router.get('/', co.wrap(function*(req, res, next) {
  var restResponse = yield yodlee.cobLogin('sbCobcjohnson.as','f8699670-a2f7-4bad-953f-054f82209fb8');
  //var obj = JSON.parse(restResponse.data);
  console.log('***************** chris ' + JSON.stringify(restResponse.data.session.cobSession));
  res.send(restResponse.data.session.cobSession);
}));

module.exports = router;
