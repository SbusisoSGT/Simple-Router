let http = require('http');
let router = require('./modules/router.js');

router.handleRequests(http);

console.log('Server started at 127.0.0.1:8001');