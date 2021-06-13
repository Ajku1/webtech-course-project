import * as mongoose from 'mongoose';

const connectDb = () => {
    return mongoose.connect('localhost:3001/messenger_db');
};

export default connectDb;