const router = require("express").Router();

router.get("/usergettest", (req,res) => {
    res.send("usertestsuccess");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send(""+username);
});

module.exports = router;