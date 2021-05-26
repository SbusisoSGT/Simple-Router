let routes = [{'name': '404', 'file': '404.html'},  
                {'name': '500', 'file': '500.html'}, 
                    {'name': '', 'file': 'index.html'},
                    {'name': '/about', 'file': 'about.html'}];

let returnFilename = (path) => {
    let route = null;

    for(obj of routes){
        if(obj.name == path){
            route = obj;
            break;
        } else if(obj.name == '404')
            route = obj;
    }

    return route;
};


exports.get = (path, handler) => {
    let file = returnFilename(path).file;

    handler(file);
};