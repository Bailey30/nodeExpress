const User = require("./userModel") ////mongoose schema



exports.addUser = async (req, res) => {
    console.log(req.body);
    try {
        const newUser = new User(req.body)
        console.log(newUser);
        await newUser.save();
        res.status(200).send({ message: "successfully added user", newUser })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "unsuccessful, please check" })
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find(req.body);
        res.status(200).send({ message: "received user data", users })
        // console.log(req.params);
        // console.log(users[0].password)
    } catch (error) {
        console.log(error);
    }
}
exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne(req.body.filter)
        req.user = user
        // console.log(user);
        req.oldpassword = req.body.oldpassword
        console.log(req.oldpassword);
        req.newpassword = req.body.newpassword 
        console.log(req.newpassword);
        console.log(req.body);
        // res.locals.user = await User.findOne(req.body.filter)
        // res.locals.password = req.body.password
        if (user) { 
            next() 
        } else {
            throw new Error()
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "user does not exist" })
    }
}

exports.deleteUser = async (req, res) => {
    const user = await await User.deleteOne(req.body)
    res.status(200).send({ message: "user deleted", user })
}

// [req.body.filter]
// const user = await User.updateOne({username: req.body.filter.username}, {[req.body.newData.key]: req.body.newData.value})
exports.updateUser = async (req, res) => { /// pn hold do get first
    try {
        const user = await User.findOneAndUpdate(req.body.filter, req.body.newData, { new: true })
        res.status(200).send({ message: "successfully updated user", user })
    } catch (error) {
        console.log(error);
    }
}