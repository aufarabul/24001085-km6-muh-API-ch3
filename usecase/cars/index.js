const carsRepo = require("../../repository/cars");

exports.getCarsbyId = (id) => {
  const data = carsRepo.getCarsbyId(id);
  return data;
};

exports.getCars = (
  id,
  plate,
  manufacture,
  model,
  capacity,
  availableAt,
  transmission,
  available,
  type,
  year
) => {
  const data = carsRepo.getCars(
    id,
    plate,
    manufacture,
    model,
    capacity,
    availableAt,
    transmission,
    available,
    type,
    year
  );
  return data;
};

exports.postCars = (payload) => {
  const data = carsRepo.postCars(payload);
  return data;
};

exports.putCars = (id, payload) => {
  const data = carsRepo.putCars(id, payload);
  return data;
};

exports.DelCars = (id) => {
  const data = carsRepo.DelCars(id);
  return data;
};
