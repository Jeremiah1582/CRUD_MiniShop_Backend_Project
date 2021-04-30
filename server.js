// test
// this works

// Jeremiah test
// Stella Test

const express = require("express");
const app = express();
require("dotenv").config();

// routers
const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productRouter");

// mongodb settings
const mongoose = require("mongoose");
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;

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

// route
app.use("/", indexRouter);
app.use("/products", productRouter);

app.listen(5555, () => {
  console.log(`server is running`);
});
