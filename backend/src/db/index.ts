import * as mongoose from 'mongoose';

const connectDb = () => {
    return mongoose.connect(`http://localhost:8080`);
};

export default connectDb;