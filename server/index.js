const express = require("express");
const cars = require("../data/cars.json");

const app = express();
const port = 2000;

app.use(express.json());
app.use(express.static("public"));

app.get("/cars", (req, res) => {
  let data = cars.map((car) => car);

  const response = {
    data,
    message: "Ping Success",
  };

  res.status(200).json(response);
});
app.get("/cars/:id", (req, res) => {
  const { id } = req.params;
  let data = cars.map((car) => car);
  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return res.status(404).json({
      message: `Car with id ${id} is not found!`,
      data: null,
    });
  }

  const response = {
    data: data[0],
    message: "Ping Success",
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
