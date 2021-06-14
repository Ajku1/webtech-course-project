import cors from 'cors';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import './config/mongo.js';
import userRouter from './routes/user.js';
import chatroomRouter from './routes/chatroom.js';
import messageRouter from './routes/message.js';
import { Server } from 'socket.io';
 
const port = process.env.PORT || '3000';
const app = express();
app.set('port', port);
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
app.use('/api/chatroom', chatroomRouter);
app.use('/api/message', messageRouter);

app.use('*', (req, res) => {
    return res.status(404)
        .json({
            success: false,
            message: 'API endpoint doesnt exist'
        });
});

const server = http.createServer(app);

const io = new Server(server);
io.on("connection", socket =>{
    console.log("conection");
});


server.listen(port);
server.on('listening', () => {
    console.log(`Listening on port:: http://localhost:${port}/`);
});

