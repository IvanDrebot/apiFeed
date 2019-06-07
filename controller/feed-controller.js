const fs = require('fs');
let obj = require('../json/feeds');

let controller = {};

controller.getAll = async (req, res, next) => {
    res.json(obj);
};

controller.getById = async (req, res, next) => {
    const id = req.params.id;
    let feed = await obj.table.filter(obj => obj.id == id);
    res.json(feed);
};

controller.create = async (req, res, next) => {
    let feed = req.body;
    obj.table.push(feed);
    let json = JSON.stringify(obj);
    fs.writeFileSync('./json/feeds.json', json);
    res.json({
        message: 'feed is successfully registered',
        status: true
    })
};

controller.delete = async (req, res, next) => {
    const index = await obj.table.findIndex(x => x.id === req.params.id);
    obj.table.splice(index, 1);
    let json = JSON.stringify(obj);
    fs.writeFileSync('./json/feeds.json', json);
};

module.exports = controller;
