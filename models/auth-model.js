const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

userSchema.pre("save", async function () {
  try {
    const user = this;
    if (!user.isModified("password")) next();
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashPassword;
  } catch (error) {
    console.log({ msg: "error in hasing the password", error });
  }
});

userSchema.methods.checkPassword = function (pass) {
  return bcrypt.compare(pass, this.password);
};

const UserModel = model("User", userSchema);

module.exports = UserModel;
