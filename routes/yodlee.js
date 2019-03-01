var express = require('express');
var router = express.Router();
const co = require('co');
var yodlee = require('../yodleeService');

/* GET users listing. */

router.get('/', co.wrap(function*(req, res, next) {
  var restResponse = yield yodlee.cobLogin('sbCobcjohnson.as','f8699670-a2f7-4bad-953f-054f82209fb8');
  res.send(JSON.stringify(restResponse.data.session.cobSession));
  //var obj = JSON.parse(restResponse.data);
  //console.log('***************** chris 1' + JSON.stringify(restResponse.data.session));
  //res.send(JSON.parse('{"cobrandId": "10010352", "applicationId": "3A4CAE9B71A1CCD7FF41F51006E9ED00"}'));
}));

module.exports = router;
