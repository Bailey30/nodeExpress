const bcrypt = require("bcrypt")
const User = require("../user/userModel")

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8)
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "unsuccessful, please try again"})
    }
}

exports.emailCheck = async(req, res, next)=> {
    try {      
           if (req.body.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/) !== null){
               next()
           } else {
               throw new Error("nope")
           }          
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "invalid email format"})
    }
}
// exports.decryptPassword = async (req, res, next) => {
//     try {
//         const user = await User.findOne(req.body.filter)
//         console.log(user);
//         const guess =(req.body.password)
//         const storedHash = user.password
//         const decrypted = await bcrypt.compare(guess, storedHash)
//         if(decrypted) {
//             res.status(200).send({message: `password was ${decrypted}`,user})
//         } else {
//             res.status(200).send({message: `password was ${decrypted}, try again`})
//         }
//         // console.log(decrypted);
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({message: `try again`})   
//     }
// }
exports.decryptPassword = async (req, res, next) => {
    try {
        // const user = res.locals.user
        // const guess = res.locals.password
        // const storedHash = user.password
        // const decrypted = await bcrypt.compare(res.locals.password, res.locals.user.password)
        
        const user = req.user
        const decrypted = await bcrypt.compare(req.body.password, req.user.password)
        if(decrypted) {
            res.status(200).send({message: `password was ${decrypted}`, user})
            console.log(decrypted);
        } else {
            throw new Error()
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({message: `incorrect password`})   
    }
}