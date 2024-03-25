//*******************importing section started************** */
const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/auth-controllers");

//*******************importing section ended************** */

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
``;
