const User = require("./userModel") ////mongoose schema

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).send({ message: "successfully added user", newUser })
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find(req.body);
        res.status(200).send({message: "received user data", users})
    } catch (error) {
        
    }
}
exports.deleteUser = async (req, res) => {
    const user = await await User.deleteOne(req.body)
    res.status(200).send({message: "user deleted", user})
}

// [req.body.filter]
// const user = await User.updateOne({username: req.body.filter.username}, {[req.body.newData.key]: req.body.newData.value})
exports.updateUser = async (req, res) => { /// pn hold do get first
    try {
        const user = await User.findOneAndUpdate(req.body.filter, req.body.newData,{new: true})
        res.status(200).send({ message: "successfully updated user", user })
    } catch (error) {
        console.log(error);
    }
}