const newsRouter = require('./news');
const toysRouter = require('./toys');
const siteRouter = require('./site');

function route(app){
    app.use('/toys',toysRouter);

    app.use('/',siteRouter);
}

module.exports = route;