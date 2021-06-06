import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from "uuid";

const chatroomSchema = mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, ""),
    },
    name: { 
        type: String, required: true 
    },
    members: [{
         type: String
    }],
    description: { 
        type: String
    }
});

export default mongoose.model('Chatroom', chatroomSchema);
//module.exports = mongoose.model('Chatroom', chatroomSchema);