const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars.js");

/* Add routes */
router
  .route("/:id")
  .get(carsController.getCarsbyId)
  .put(carsController.putCars)
  .delete(carsController.DelCars);
router.route("/").get(carsController.getCars).post(carsController.postCars);

module.exports = router;
