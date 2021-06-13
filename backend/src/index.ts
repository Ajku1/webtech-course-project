import * as express from 'express';
import * as cors from 'cors';
import { MongoClient } from 'mongodb';
import connectDb from './db/index';


const app = express();  
const SERVER_PORT = 3001;

connectDb()
    .then(() => {
        console.log('Database connection successful');
        
        app.listen(SERVER_PORT, () => {
            console.log(`Server is listening on port ${SERVER_PORT}`);
        });
    })
    .catch(error => console.error('Database connection error'));