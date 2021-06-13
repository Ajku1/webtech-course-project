import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const chatMessageSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4().replace(/-/g, '')
        },
        text: {
            type: String,
            require: true
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        sendDate: {
            type: Date,
            default: Date.now()
        }
    }
);

export default mongoose.model('Message', chatMessageSchema);
