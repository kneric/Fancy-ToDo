const User = require('../models/user');
const jwt = require ('jsonwebtoken');

const signin = (req, res) {
  const {username, password} = req.body;

  User.findOne({username})
  .then (user => {
    user.checkPwd(password, (isMatched)=> {
      if(isMatched){
        let token = jwt.sign({_id: user._id}, process.env.secretKey)
        res.status(200).json({token, message:'Signed in succesfully'})
      } else {
        res.status(400).json({message:'Username / password is incorrect'})
      }
    })
  })
  .catch(err => {
    res.status(404).json('User not found');
  })
}

const signup = (req, res){
  const {username, email, password} = req.body;

  User.findOne({username})
  .then(user => {
    if(!user){
      User.create({
        username,
        email,
        password
      })
      .then(createdUser=> {
        let token = jwt.sign({_id: createdUser._id}, process.env.secretKey)
        res.status(201).json({
          token: token, 
          message: 'user created'
        })
      })
      .catch(err=> {
        res.status(400).json({message: err})
      })
    } else {
      res.status(400).json({message: 'username already taken'})
    }
  })
  .catch(err=> {
    res.status(500).json({message: err})
  })
}

const loginFB = (req, res){
  let authResponse = req.body;
  let url = `https://graph.facebook.com/me?fields=id,name,email&access_token=${authResponse.accessToken}`;
  
}

module.exports = {
  signin,
  signup,
  loginFB
};
