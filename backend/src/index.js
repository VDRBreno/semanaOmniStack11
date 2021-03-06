const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    Métodos HTTP:

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*
    Tipos de parâmetros:

    Query Parans: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos 
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, ...
    NoSQL: MongoDB, CouchDB, ...
*/

/*
    Driver: SELECT * FROM users
    Query Builder: table('user').select('*')
*/



app.listen(3333);