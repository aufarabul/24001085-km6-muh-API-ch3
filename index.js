const express = require("express");
const cars = require("./data/cars.json");
const route = require("./route");

const app = express();
const port = 2000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", route);
app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});
app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

// app.get("/cars", (req, res) => {
//   let data = cars.map((car) => car);

//   const response = {
//     data: data,
//     message: "Ping Success",
//   };

//   res.status(200).json(response);
// });
// const uuid = uuidv4(String(id)).replace(
//   /(.{8})(.{4})(.{4})(.{4})(.{12})/,
//   "$1-$2-$3-$4-$5"
// );
// let data = cars.map((car) => car);
// data = data.find((car) => car.id === uuid);
// app.get("/cars/:id", (req, res) => {
//   const { id } = req.params;

//   const car = cars.find((car) => car.id === id);

//   if (!car) {
//     return res.status(404).json({
//       message: `Car with ID ${id} not found!`,
//       data: null,
//     });
//   }
//   const response = {
//     data: car,
//     message: `Ping Success`,
//   };

//   res.status(200).json(response);
// });

// app.
// app.get("/cars/:id", (req, res) => {
//   const { id } = req.params;
//   idint = parseInt(id);
//   let data = cars.map((car) => car);

//   // Convert the integer ID to a UUID

//   for (var i = 0; i < data.length; i++) {
//     if (parseInt(data[i].id) === idint) {
//       return data[i].id;
//     }
//   }
//   // Return null jika tidak ada yang sesuai

//   // If car is found, return it with success message
//   const response = {
//     data: data[i],
//     message: `Ping Success`,
//   };

//   res.status(200).json(response);
// });
app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
