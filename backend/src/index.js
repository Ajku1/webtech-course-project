import http from 'http';
import express from 'express';
import logger from 'morgan';
import './config/mongo.js';
import userRouter from './routes/user.js';
import chatroomRouter from './routes/chatroom.js';
import messageRouter from './routes/message.js';
import cors from 'cors';

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
server.listen(port);
server.on('listening', () => {
    console.log(`Listening on port:: http://localhost:${port}/`);
});
