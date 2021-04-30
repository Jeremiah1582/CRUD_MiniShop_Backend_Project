const express = require("express");
const signupController = require("../controllers/signUpController");
const router = express.Router();

router.get("/", signupController.signUp);
router.post("/", signupController.signUpPost);

module.exports = router;
