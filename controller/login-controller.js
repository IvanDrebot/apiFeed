const fs = require('fs');
let controller = {};

controller.getAll = async (req, res, next) => {
    let file = require('../json/users');
    res.json(file);
};

controller.create = async (req, res, next) => {
    let body = req.body;
    // let obj = {
    //     table: []
    // };
    // obj.table.push({id: 1, userName: 'ivan', password: '12345'});
    // let userData = JSON.stringify(obj);
    // fs.writeFileSync('./json/users.json', userData);


    fs.readFile('./json/users.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            const id = Math.floor(Math.random() * 100);
            let obj = JSON.parse(data);
            body.id = id;
            obj.table.push(body);
            let json = JSON.stringify(obj);
            fs.writeFileSync('./json/users.json', json);
        }
    });
};

module.exports = controller;
