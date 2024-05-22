const jwt = require("jsonwebtoken")

exports.getToken= (data) => {
    const token = jwt.sign({data}, "secretKey", {expiresIn : "10m"});
    return token;
}