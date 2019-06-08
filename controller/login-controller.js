const fs = require('fs');
let obj = require('../json/users');

let controller = {};

controller.create = async (req, res, next) => {
    let data = req.body;
    data.id = Math.floor(Math.random() * 1000);
    obj.table.push(data);
    let json = JSON.stringify(obj);
    fs.writeFileSync('./json/users.json', json)
};

module.exports = controller;
