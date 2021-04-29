// test
// this works

// Jeremiah test
// Stella Test

const express = require("express");
const app = express();

// routers
const indexRouter = require("./routes/indexRouter");

// settings
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`));
app.use(
  express.urlencoded({
    extended: false,
  })
);

// route
app.use("/", indexRouter);

app.listen(5555, () => {
  console.log(`server is running`);
});
