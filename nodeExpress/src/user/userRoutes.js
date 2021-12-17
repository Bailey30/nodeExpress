const { Router } = require("express")
const { addUser, updateUser, getUser, deleteUser, login } = require("./userController")
const { hashPassword, decryptPassword, emailCheck } = require("../middleware")
const userRouter = Router();

userRouter.post("/user", hashPassword, emailCheck, addUser); 
//req:
// {
// 	"username": "harachio",
// 	"email": "horachio@email.com",
// 	"password": "test"
// }

userRouter.get("/login", login, decryptPassword)
//req:
// //{
// 	"filter": {
// 		"username":"clint"
// 	}
// 	,
// 	"password": "abcd"
// }

userRouter.get("/user", getUser) // finds all users or "usernane": "name"
userRouter.put("/user", updateUser)
//req:
// {
// 	"filter": {
// 		"username": "gav"
// 	},
// 	"newData": {
// 	"username":"seb"
// 	}	
// }
userRouter.delete("/user", deleteUser)// "username": "mary"

module.exports = userRouter;


///app.use(/user. ()=> {}) -- would run every time the /user path is accessed