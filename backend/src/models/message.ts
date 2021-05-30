import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: String
    }, 
    time: {
        type: String
    }
});

const Message = mongoose.model('Message', messageSchema);

export default Message;