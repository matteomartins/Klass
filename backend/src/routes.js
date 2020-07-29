const express = require('express');
const CompanyController = require('./controller/CompanyController');
const EmployeeController = require('./controller/UserController');
const PositionController = require('./controller/PositionController');
const PositionEmployeeController = require('./controller/PositionEmployeeController.js');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('API do sistema Klass');
});

routes.get('/employee', EmployeeController.index);
routes.post('/employee', EmployeeController.create);
routes.delete('/employee/:id', EmployeeController.delete);

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);
routes.delete('/company/:id', CompanyController.delete);

routes.post('/position', PositionController.create);
routes.get('/position', PositionController.index);
routes.delete('/position', PositionController.delete);

routes.post('/position-employee', PositionEmployeeController.create);
routes.get('/position-employee', PositionEmployeeController.index);
routes.delete('/position-employee', PositionEmployeeController.delete);

module.exports = routes;