const z = require("zod");

const userSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(5, { msg: "username must be of 5 char atleast" })
    .max(50, { msg: "username must be not greater than 50 char" }),
  email: z.string({ required_error: "email is required" }).email(),
  password: z
    .string({ required_error: "username is required" })
    .trim()
    .min(5, { msg: "username must be of 5 char atleast" })
    .max(50, { msg: "username must be not greater than 50 char" }),
});

module.exports = userSchema;
