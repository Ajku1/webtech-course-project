import * as mongoose from 'mongoose';

const chatroomSchema = new mongoose.Schema({
    name: {
        type: String
    },
    members: [{
        type: String
    }],
    description: {
        type: String
    },
    messages: [{
        type: String
    }]
});

const Chatroom = mongoose.model('Chatroom', chatroomSchema);

export default Chatroom;