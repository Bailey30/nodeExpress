const express = require("express");
const res = require("express/lib/response");

const app = express()

const port = 5000;

app.listen(port, () => {
    console.log("listening on port 5000");
});

app.use("/", express.static("public")); ///pointing to an endpoint in our browser
app.use("/aboutus", express.static("public/aboutus.html"));

////////////////////////////////

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

