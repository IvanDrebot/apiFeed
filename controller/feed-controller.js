const fs = require('fs');
const xml2js = require('xml2js');
const https = require('https');
const parser = new xml2js.Parser();
const obj = require('../json/feeds');

let controller = {};

controller.getAll = async (req, res, next) => {
    res.json(obj);
};

controller.getById = async (req, res, next) => {
    const id = req.params.id;
    const singleFeed = require(`${'../json/'}${JSON.parse(req.query.title)}`);
    let feed = await obj.table.filter(obj => obj.id == id);
    res.json({feed, singleFeed});
};

controller.create = async (req, res, next) => {
    const feed = req.body;

    parser.on('error', function (err) {
        console.log('Parser error', err);
    });

    let data = '';
    https.get(feed.url, function (res) {
        if (res.statusCode >= 200 && res.statusCode < 400) {
            res.on('data', function (data_) {
                data += data_.toString();
            });
            res.on('end', function () {
                parser.parseString(data, function (err, result) {
                    fs.writeFileSync(`${'./json/'}${feed.title}.json`, JSON.stringify(result))
                    obj.table.push(feed);
                    let json = JSON.stringify(obj);
                    fs.writeFileSync('./json/feeds.json', json);
                });
            });
        }
    });
};

controller.delete = async (req, res, next) => {
    const index = await obj.table.findIndex(x => x.id === req.params.id);
    obj.table.splice(index, 1);
    let json = JSON.stringify(obj);
    fs.writeFileSync('./json/feeds.json', json);
};

module.exports = controller;
