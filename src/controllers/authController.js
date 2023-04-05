exports.post = (req, res) =>{   
    
    const {email , password} = req.body;


        if(email ==='user.teste@gmail.com' && password ==='123456')
        {
            const jwt = require('jsonwebtoken');
    
            const dataUser = {
                nome:"user teste",
                email:email,
                id: 1 
            }
    
            const privateKey = process.env.SECRET_KEY_JWT;
    
            jwt.sign(dataUser, privateKey, (error, token)=> {
                if(error) {
                    res.status(500).json({message:"Erro generation JWT"})
                    return;
                }
    
                res.json({
                    token: token
                })
            })
        }else {
            res.status(401);
            res.json({message: "wrong username or password"});
        }
}