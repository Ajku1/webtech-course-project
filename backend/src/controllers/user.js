import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { GET_USERS_FAILED, INVALID_CREDENTIALS, REGISTER_FAILED } from '../messages.js';

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
                res.status(200).json({ name: createdUser.name, email: createdUser.email });
            }
            ).catch((error) => {
                console.log(error);
                res.status(500).json({ result: false, message: REGISTER_FAILED, error });
            });
    });
  },
  loginUser: async (req, res) => {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (!user) {
          res.status(500).json({ message: INVALID_CREDENTIALS });
          return;
      }
      bcrypt.compare(req.body.password, user.password, (err, passwordMatches) => {
          const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: user.email
          });
          if (passwordMatches) {
              res.status(200).json({ name: user.name, email: user.email, token: jwtBearerToken });
          } else {
              res.status(401).json({ message: INVALID_CREDENTIALS });
          }
      });
  }
};
