let web = require('./web.js');
let server = require('./server.js');

exports.handleRequests = (http) => {

    http.createServer((req, res) => {
        let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

        web.get(path, (file) => {
            server.FetchStaticFiles(res, './../static/' + file, 'text/html');
        });

        
        
    }).listen(8001);

};