const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/bookRouter");
const cors = require('cors')

// middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);


mongoose
  .connect(
    "mongodb+srv://anuragdambale:2kp7zGIybIz3FdMz@cluster0.ofdprp9.mongodb.net/Books?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  })
  .then(() => {
    app.listen(3200, () => {
      console.log(`Server is running on http://localhost:3200`);
    });
  })

  .catch((e) => {
    console.log("error" + e);
  });