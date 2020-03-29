/**
 * Métodos HTTP
 * 
 * GET:     Buscar/listar informações do backend
 * POST:    Criar informação no backend
 * PUT:     Alterar informação no backend
 * DELETE:  Deletar informação no backend
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params:   Enviado na url (?id=16&data=20200326)
  *     const params = req.query;
  * 
  * Route Params:   Utilizado para identificar recursos (/users/16)
  *     const params = req.params;
  * 
  * Request Body:   Corpo da requisição (usado para criar (POST) ou alterar (PUT) uma informação)
  */

const express = require('express');

const OngControler = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;