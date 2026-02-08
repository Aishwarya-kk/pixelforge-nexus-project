const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

// optional browser test
router.get("/register",(req,res)=>{
 res.send("Auth Route Working");
});

module.exports = router;