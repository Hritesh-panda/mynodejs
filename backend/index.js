const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv");
const emproutes = require("./routes/employerout");
dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/employee", emproutes);
// app.use("/", async (req, res) => {
//   try {
//     res.send("welcome to our page");
//   } catch (err) {
//     res.status(500).send("somethings error");
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
