const jwt = require('jsonwebtoken')

exports.authenticateJWT = async(req,res,next) =>{
        const token = req.header('Authorization')?.replace('Bearer ','')

        if(!token)
        {
            return res.status(401).send('Access Denied')
        }

        try{
            const decoded = jwt.verify(token,process.env.SECRET_TOKEN)
            req.user = decoded.user
            next()
        }catch(error){
            console.error(error)
            res.status(500).send('Invalid Token')
        }
}
