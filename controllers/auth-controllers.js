const UserModel = require("../models/auth-model");

const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    const userExist = await UserModel.findOne({ email });
    if (userExist)
      return res.status(200).json({ msg: "email already registered" });

    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json({ msg: "user created", user: newUser });
  } catch (error) {
    res.status(500).json({ msg: "error while creating new user", error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await UserModel.findOne({ email });
    if (!userExist) return res.json({ mgs: "invalid details" });
    const isPassCorrect = await userExist.checkPassword(password);
    if (!isPassCorrect) return res.json({ msg: "incorrect email or password" });

    res.status(200).json({
      msg: "login success",
    });
  } catch (error) {
    res.status(500).json({ msg: "error in login", error });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
