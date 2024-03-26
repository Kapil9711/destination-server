//*******************importing section started************** */
const express = require("express");
const router = express.Router();
const schema = require("../auth-validators/auth-validators");
const validate = require("../validate-middlware/validate-middleware");

const { registerUser, loginUser } = require("../controllers/auth-controllers");

//*******************importing section ended************** */

router.route("/register").post(validate(schema), registerUser);
router.route("/login").post(loginUser);

module.exports = router;
