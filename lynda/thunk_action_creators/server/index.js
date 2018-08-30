const express = require('express');
const cors = require('cors');
const resorts = require('./resort-names.json');
const { port=3333, delay=0 } = require('minimist')(process.argv);

const byName = name => resort =>
    name.toLowerCase() === resort.substr(0, name.length).toLowerCase();

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next()
};

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    //get resort names
    .get('/resorts', (req, res) =>
        res.status(200).json(resorts)
    )
    .get('/resorts/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    //filter names
                    resorts.filter(byName(req.params.name))
                ),
            delay
        )
    );

//port + delay
app.listen(port, () => console.log('Ski resort app running on port ' + port + ' with a ' + delay/1000 + ' second delay'));