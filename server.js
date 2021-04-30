// test
// this works

// Jeremiah test
// Stella Test

const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/userRouter");

// routers
const indexRouter = require("./routes/indexRouter");
const loginRouter = require("./routes/loginRouter");
const productRouter = require("./routes/productRouter");

// mongodb settings
const mongoose = require("mongoose");
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;
// const DB_LINK =
//   "mongodb+srv://admin:admin1234@arifdci.fvkse.mongodb.net/shopproject";
// settings
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`));
app.use(
  express.urlencoded({
    extended: false,
  })
);

// database connection
mongoose
  .connect(DB_LINK, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Mongo database is connected`);
  })
  .catch(() => {
    console.log(`Mongo database is not connected`);
  });

// router
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/products", productRouter);

app.listen(5555, () => {
  console.log(`server is running`);
});
