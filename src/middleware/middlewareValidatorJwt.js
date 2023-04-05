

exports.middleareAuth = (req, res, next) => {
    const jwt = req.headers["authorization"];
    const secretKeyJwt = process.env.SECRET_KEY_JWT;

    const jwtService = require("jsonwebtoken");

    jwtService.verify(jwt, secretKeyJwt, (error)=> {
        
        req.authorization = error ? false : true;
        next();
    })
}