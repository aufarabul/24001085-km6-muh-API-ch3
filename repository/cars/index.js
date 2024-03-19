const cars = require("../../data/cars.json");

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
  let data = cars.map((car) => car);
  data = data.filter((car) => {
    let filteredStatus = true;
    if (id) {
      filteredStatus =
        filteredStatus && car.id.toLowerCase().includes(id?.toLowerCase());
    }
    if (plate) {
      filteredStatus =
        filteredStatus &&
        car.plate.toLowerCase().includes(plate?.toLowerCase());
    }
    if (manufacture) {
      filteredStatus =
        filteredStatus &&
        car.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
    }
    if (model) {
      filteredStatus =
        filteredStatus &&
        car.model.toLowerCase().includes(model?.toLowerCase());
    }
    if (capacity) {
      filteredStatus =
        filteredStatus &&
        car.capacity.toString().includes(capacity?.toLowerCase());
    }

    if (availableAt) {
      filteredStatus =
        filteredStatus &&
        car.availableAt.toLowerCase().includes(availableAt?.toLowerCase());
    }

    if (transmission) {
      filteredStatus =
        filteredStatus &&
        car.transmission.toLowerCase().includes(transmission?.toLowerCase());
    }

    if (available) {
      filteredStatus =
        filteredStatus &&
        car.available.toString().includes(available?.toLowerCase());
    }
    if (type) {
      filteredStatus =
        filteredStatus && car.type.toLowerCase().includes(type?.toLowerCase());
    }
    if (year) {
      filteredStatus =
        filteredStatus && car.year.toLowerCase().includes(year?.toLowerCase());
    }

    return filteredStatus;
  });
  return data;
};

exports.getCarsbyId = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id === id);
  if (data.length == 0) {
    return null;
  }
  return data[0];
};

exports.postCars = (payload) => {
  cars.push(payload);
  return payload;
};

exports.putCars = (id, payload) => {
  const updatedCars = {
    id: id,
    ...payload,
  };
  const carToUpdate = cars.find((car) => car.id === id);
  Object.assign(carToUpdate, updatedCars);
  return updatedCars;
};
exports.DelCars = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id === id);
  cars.splice(data, 1);
  return data;
};
