import * as bcrypt from 'bcrypt';
import User from '../models/user.js';

export default {
  getUsers: (req, res) => {
    User.find()
    .populate('user')
    .exec((error, createdUsers) => {
        if (error) {
            res.status(500).json({ result: false, message: 'Unable to get users', error });
        }
        res.status(200).json({ result: true, users: createdUsers });
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
                res.json({ name: createdUser.name, email: createdUser.email });
            }
            ).catch((error) => {
                console.log(error);
                res.status(500).json({ result: false, message: 'Unable to create user', error });
            });
    });
  },
  loginUser: async (req, res) => {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (!user) {
          res.json({ result: false });
          return;
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
          res.json({ result, email: req.body.email });
      });
  }
};
