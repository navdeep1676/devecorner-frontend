const express = require("express");
const app = express();
const connectDb = require("./config/dbConnect");
const contactRoute = require("./routes/contactRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
connectDb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/v1/contact", contactRoute);
app.listen(4000, () => {
  console.log("Server is Running on PORT this 4000");
});
