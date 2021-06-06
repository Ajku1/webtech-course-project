import User from '../models/user.js';

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
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });
    user.save().then(
      (createdUser) => {
          res.json({ result: true, user: createdUser});
      }
  ).catch(
      (error) => {
          console.log(error);
          res.status(500).json({ result: false, message: 'Unable to create user', error: error });
      }
  );
  },
  loginUser: async (req, res) => {
   
  }
}