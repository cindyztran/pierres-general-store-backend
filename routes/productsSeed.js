const productSeedRoutes = (app, fs) => {
    const dataPath = 'db/productSeed.json';

    app.get('/products', (req, res) => {    
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
            });
        });
    };

    module.exports = productSeedRoutes;
