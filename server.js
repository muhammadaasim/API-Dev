const express = require("express");
const dotenv = require("dotenv");

//Load enviroment variable
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=> res.send({msg:"Hello from server"})
);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on http://localhost:${process.env.PORT}`
  )
);
