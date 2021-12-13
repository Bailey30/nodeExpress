const { Router } = require("express")
const { addUser, updateUser, getUser, deleteUser } = require("./userController")
const userRouter = Router();

userRouter.post("/user", addUser); ///passing in function to .post - what is "/user"?
userRouter.get("/user", getUser)
userRouter.put("/user", updateUser)
userRouter.delete("/user", deleteUser)

module.exports = userRouter;