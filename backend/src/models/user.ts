import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required field.'],
        minlength: [5, 'Username cannot be less than 5 characters.'],
        maxlength: [25, 'Username cannot be more than 25 characters.']
    },
    password: {
        type: String,
        required: [true, 'Password is required field.'],
        minlength: [5, 'Password cannot be less than 5 characters.'],
        maxlength: [35, 'Password cannot be more than 35 characters.']
    },
    email: {
        type: String,
        validate: {
            validator: (value) => /^\S+@\S+\.\S+$/.test(value),
            message: 'Email must be a valid email address.'
        }
    }
});

const User = mongoose.model('User', userSchema);

export default User;