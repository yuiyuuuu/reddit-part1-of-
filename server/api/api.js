const router = require("express").Router();

module.exports = router;

//all api routes
router.use("/posts", require("./posts"));
