const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const productRoute = require("./routes/product.route")

// Middlewares

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))

// Routes

app.use("/api/products", productRoute)

app.get("/", (req, res) => {
    res.send("Hello from node api");
});

mongoose
    .connect(
      "mongodb+srv://Admin:1921u0030@backed-crud.kdx26l9.mongodb.net/?retryWrites=true&w=majority&appName=Backed-crud"
    )
    .then(() => {
      app.listen(port, () => {
        console.log(`app listening on port ${port}`);
      });
      console.log("Connected to the database!");
    })
    .catch(() => {
      console.log("Connection failed!");
    });
