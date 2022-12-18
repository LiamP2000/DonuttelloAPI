const config = require('config');
const jwt = require('jsonwebtoken');
const jwtPassword = config.get('jwtPassword')

let registeredUsers = [
    {
      username: "test@student.thomasmore.be",
      password: "123456",
      isAdmin: true,
    },
    {
      username: "Jan",
      password: "456",
      isAdmin: false,
    },
]

async function login(req, res){
    let username = req.body.username;
    let password = req.body.password
  
    // loop over all registered users
    for(let i = 0; i < registeredUsers.length; i++){
        let user = registeredUsers[i]
  
        if(user.username == username && user.password == password && user.isAdmin == true){
            // username found, password is correct
            // user is also an admin, so create jwt token & send
            let jwtToken = jwt.sign(user, jwtPassword);
            res.json({
                status: "success",
                data: jwtToken
            });
            return
        }
    }
  
    // user not found, or password incorrect, or user is not an admin
    res.status(400).json({
        status: "error",
        message: "Username or password wrong"
    });
}

async function changePassword(req, res){
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let confirmPassword = req.body.confirmPassword;

    if(newPassword != confirmPassword) {
        res.status(400).json({
            status: "error",
            message: "New password is not the same as confirm password"
        })
        return
    }

    let username = req.user.username

    for(let i = 0; i < registeredUsers.length; i++){
        let user = registeredUsers[i]
  
        if(user.username == username && user.password == oldPassword){
            // username found, password is correct
            user.password = newPassword

            res.json({
                status: "success",
                data: "New password has been set!"
            });
            return
        }
    }

    res.status(400).json({
        status: "error",
        message: "Old password is not correct"
    });
}

module.exports = {
    login,
    changePassword
}