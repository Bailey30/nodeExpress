const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
    res.send("User List")
})
router.get("/new", (req, res) => {
    // res.send("User New Form")
    res.render("users/new", { firstName: "Test" })
})

router.post("/", (req, res) => {
    req.body.firstName
    res.send("hi")
})

router
    .route("/:id")
    .get((req, res) => {
        // req.params.id
        console.log(req.user);
        res.send(`get user with ID ${req.params.id}`)
    }).put((req, res) => {
        // req.params.id
        res.send(` user with ID ${req.params.id}`)
    }).delete((req, res) => {
        // req.params.id
        res.send(`delete user with ID ${req.params.id}`)
    })

// router.get("/:id", (req, res) => {
//     req.params.id
//     res.send(`get user with ID ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     req.params.id
//     res.send(`update user with ID ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//     req.params.id
//     res.send(`delete user with ID ${req.params.id}`)
// })

const users = [{ name: "kyle" }, { name: "sally" }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

// router.use("/", express.static("public")); ///pointing to an endpoint in our browser
// router.use("/aboutus", express.static("public/aboutus.html"));

module.exports = router