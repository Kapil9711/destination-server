//*******************importing section started************** */
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const authRouter = require("./auth-rounter/authRouter");
const connectDb = require("./utils/db");

//*******************importing section ended************** */

//*******************middleware section started************** */
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

//*******************middleware section ended************** */

app.get("/", (req, res) => {
  res.send("send request on /api/auth/");
});

//*******************connection to db section started************** */
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    console.log("connected to mongo Db");
    app.listen(port, console.log(`listning on port ${port}....`));
  } catch (error) {
    console.log("while connection to database", error);
  }
};

start();
