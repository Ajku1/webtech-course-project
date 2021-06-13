import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const chatroomSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
           default: () => uuidv4().replace(/-/g, '')
        },
        name: {
            type: String,
            required: true
        },
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }],
        description: {
            type: String
        },
        messages: [{
            type: String
        }]
    }
);

export default mongoose.model('Chatroom', chatroomSchema);
