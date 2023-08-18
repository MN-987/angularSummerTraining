var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Movies = require("./models/movies");
var cors=require('cors');


//connect to database
mongoose
  .connect(
    "mongodb+srv://Mos1123:Mos1123@facultysystemdb.wu3osi3.mongodb.net/"
  )
  .then(function () {
    console.log("connected to database");
  })
  .catch(function (err) {
    console.log(`Error connecting to database,wrong userName or password`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//products  get //get all products

app.get("/movies", function (req, res) {
  Movies.find()
    .then(function (moviesData) {
      //   console.log(productsData);
      if (moviesData.length == 0) {
        console.log(moviesData);
        res.send({
          message: "No Movies Founded",
        });
      } else {
        // console.log(moviesData);
        res.send(moviesData);
      }
    })
    .catch(function (err) {
      console.log("Error");
    });
});

//  /products/:id  get getProductById

// app.get("/products/:id", function (req, res) {
//   var productId = req.params.id;
//   Product.findOne({ id: productId })
//     .then(function (singleProduct) {
//       if (!singleProduct) {
//         res.send({
//           message: "No Product Founded with this id",
//         });
//       } else {
//         res.send(singleProduct);
//       }
//     })
//     .catch(function (err) {
//       console.log(`Error ${err}`);
//     });
// });

// /addProduct  Post add new product

// app.post("/addProduct", function (req, res) {
//   var newProductData = req.body;
//   console.log(req.body);
//   let newProduct = new Product({
//     id: newProductData.id,
//     title: newProductData.title,
//     price: newProductData.price,
//     description: newProductData.description,
//     category: newProductData.category,
//     image: newProductData.image,
//     rating: {
//       rate: newProductData.reatingCount,
//       count: 120,
//     },
//   });

//   newProduct
//     .save()
//     .then(function (data) {
//       console.log("product added!");
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log("Error");
//     });
// });

app.listen(3000, function () {
  console.log("server connected");
});
