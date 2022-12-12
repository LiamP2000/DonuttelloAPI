const config = require('config');
const jwt = require('jsonwebtoken');
const jwtPassword = config.get('jwtPassword')

function adminOnlyMw(req, res, next) {
    let jwtToken = req.headers.authorization;

    try {
        // Check if JWT token is valid
        let decodedUser = jwt.verify(jwtToken, jwtPassword);

        // Check if user is admin
        if(decodedUser.isAdmin === true){
            // Continue with request (e.g. delete or update)
            next()
        }else{
            // admin is not a user
            res.status(400).json({
                status: "error",
                message: "User is not an admin"
            })
        }
    } catch(err) {
        // token is invalid
        res.status(400).json({
            status: "error",
            message: "Invalid JWT Token"
        })
    }
}

module.exports = adminOnlyMw