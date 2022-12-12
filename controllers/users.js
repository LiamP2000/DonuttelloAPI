const jwt = require('jsonwebtoken');
const jwtPassword = "ge2DOiCeCKjlPf2w"

let registeredUsers = [
    {
      username: "Bob",
      password: "123",
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
  
    for(let i = 0; i < registeredUsers.length; i++){
      let user = registeredUsers[i]
  
        if(user.username == username){
            // username found
            if(user.password == password){
                // username & password correct!!!
                // create jwt token & send.
                let jwtToken = jwt.sign(user, jwtPassword);
                res.json({
                    status: "success",
                    data: jwtToken
                });
                return
            }else{
                // password wrong
                res.status(400).json({
                    status: "error",
                    message: "Username or password wrong"
                });
                return
            }
        }
    }
  
    // gebruiker niet gevonden
    res.status(400).json({
        status: "error",
        message: "Username or password wrong"
    });
}

module.exports = {
    login,
}