import express, { Express } from 'express';
import { color, log, red, green, cyan, cyanBright, gray } from 'console-log-colors';
import api from './api/api';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { routes } from './routes';
import 'reflect-metadata';

import { AppDataSource } from './db/data-source';

const app : Express = express();
const port : number = 8081;

AppDataSource.initialize().then(async() => {

    api.Log(`Data Source has been initialized`);

    app.use(cors());
    app.use(morgan('combined'));
    app.use(bodyParser.json());


    app.listen(port, (): void => {
        api.Log(`App is now listening on port`+red(` ${port}`));
    });

    routes.forEach((route : any) => {
        app.use(route.path, route.location);
    })

    api.Log(`All `+cyan(`${routes.length}`)+` routes were loaded.`);

    api.Log('Socket events loaded');

}).catch(err => {api.Log(err)})

export default app;