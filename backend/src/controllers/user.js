import * as bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import User from '../models/user.js';
import { GET_USERS_FAILED, INVALID_CREDENTIALS, REGISTER_FAILED } from '../messages.js';
import { RSA_PRIVATE_KEY } from '../middleware/auth.js';

const jwt = jsonwebtoken;

export default {
  getUsers: (req, res) => {
    User.find()
    .populate('user')
    .exec((error, createdUsers) => {
        if (error) {
            res.status(500).json({ result: false, message: GET_USERS_FAILED, error });
        }
        res.status(200).json(createdUsers);
    });
  },
  createUser: (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const user = new User({
            password: hash,
            email: req.body.email,
            name: req.body.name
        });
        user.save().then(
            (createdUser) => {
              const expiryTimeInSeconds = 60 * 60;
              const jwtBearerToken = jwt.sign({ email: user.email }, RSA_PRIVATE_KEY, { expiresIn: expiryTimeInSeconds });
              res.status(200).json({
                name: createdUser.name,
                email: createdUser.email,
                token: jwtBearerToken,
                expiresIn: expiryTimeInSeconds
              });
            }
            ).catch((error) => {
                res.status(500).json({ result: false, message: REGISTER_FAILED, error });
            });
    });
  },
  loginUser: async (req, res) => {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (!user) {
          res.status(401).json({ message: INVALID_CREDENTIALS });
          return;
      }
      bcrypt.compare(req.body.password, user.password, (err, passwordMatches) => {
        const expiryTimeInSeconds = 60 * 60;
        const jwtBearerToken = jwt.sign({ email: user.email }, RSA_PRIVATE_KEY, { expiresIn: expiryTimeInSeconds });
        if (passwordMatches) {
            res.status(200).json({
              name: user.name,
              email: user.email,
              token: jwtBearerToken,
              expiresIn: expiryTimeInSeconds
            });
        } else {
            res.status(401).json({ message: INVALID_CREDENTIALS });
        }
      });
  }
};
