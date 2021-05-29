import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    message: {
        type: String,
    },
    room: {
        type: String,
    },
    date: {
        type: String,
    }, 
    time: {
        type: String
    }
});

const Message = mongoose.model('Message', messageSchema);

export default Message;