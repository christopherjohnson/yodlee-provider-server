var axios = require('axios');
//const proxy = require('http-proxy-middleware');
var apiBase = 'https://developer.api.yodlee.com/ysl';
//const apiBase = '/api2';
//const cobrandLogin = '';
//const cobrandPassword = '';

module.exports.cobLogin = function*(username, password) {
    axios.defaults.headers.common['Api-Version'] = '1.1';
    axios.defaults.headers.common['Cobrand-Name'] = 'restserver';
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    var data = yield axios.post(apiBase + '/cobrand/login',
        {
            "cobrand": {
                "cobrandLogin": username,
                "cobrandPassword": password,
                "locale":"en_US"
            }   
        }
    );
    console.log(data);
    return data;
}