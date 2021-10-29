const { get } = require('mongoose');
const productSeedRoutes = require('./productsSeed');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('hello')
    })

    productSeedRoutes(app, fs)
};

module.exports = appRouter;