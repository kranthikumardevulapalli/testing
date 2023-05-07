
var employees = require('../controller/employee.controler');
module.exports = app => {
    var routes = require('express').Router();
    
    routes.get('/getallemployees',employees.getallemployees);
    routes.post('/createemployee',employees.createemployee);
    routes.put('/updateemployee',employees.updateemployee);
    routes.get('/getemp/:id',employees.getemployee);
    app.use('/api/employee',routes);
};