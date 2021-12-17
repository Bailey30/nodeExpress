require("./db/connection")

const express = require("express");
// const res = require("express/lib/response");
const cors = require("cors")
const userRouter = require("./user/userRoutes")
const app = express()

const port = 5000;

app.use(express.json())
app.use(cors())

app.use(userRouter)

 // npm run devStart ----- for nodemon

//the app.listen function is used to bind and listen to the connections on the specified host and port
app.listen(port, () => {
    console.log("listening on port 5000");
});

// //the app.use function is used to mount the specified middleware function(s) at the the path with is being specified
// app.use("/", express.static("public")); ///pointing to an endpoint in our browser
// app.use("/aboutus", express.static("public/aboutus.html"));




//////////////////////////////////////////

// app.use(express.static("public"))
// app.use(express.urlencoded({extended: true}))

// app.set("view engine", "ejs") 



// // app.get("/", (req, res) => {
// //     // res.status(500).send("hi")
// //     // res.download("server.js")
// //     res.render("index", {text: "world"})
// //     // res.send("hi")
// // })

// const userRouter = require("../public/users")



// app.use("/users", userRouter)
// // app.use("/public", userRouter)

