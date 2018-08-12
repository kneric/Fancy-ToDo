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

module.exports = {
  
};
