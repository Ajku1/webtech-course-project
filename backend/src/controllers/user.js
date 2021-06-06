import User from '../models/user.js';
import * as bcrypt from 'bcrypt';

export default {
  getUsers: async (req, res) => {
    User.find()
    .populate('user')
    .exec(function (error, createdUsers) {
        if (error) {
            res.status(500).json({ result: false, message: 'Unable to get users', error: error });
        }
        res.status(200).json({ result: true, users: createdUsers });
    })
  },
  createUser: async (req, res) => {
    bcrypt.hash(req.body.password,10, (err, hash) => {
        const user = new User({
            password: hash,
            email: req.body.email
        });
        user.save().then(
            (createdUser) => {
                res.json({ result: true, email: createdUser.email});
            }).catch((error) => {
                console.log(error);
                res.status(500).json({ result: false, message: 'Unable to create user', error: error });
            })
    });
  },
  loginUser: async (req, res) => {
      console.log(req.body);
      const user = await User.findOne({email: req.body.email}).exec();
      if (!user) {
          res.json({result: false});
          return;
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
          res.json({result, email: req.body.email});
      });
  }
};
