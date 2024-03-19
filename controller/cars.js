const carsUsecase = require("../usecase/cars");
const { v4: uuidv4 } = require("uuid");

exports.getCarsbyId = (req, res) => {
  const { id } = req.params;
  const data = carsUsecase.getCarsbyId(id);
  if (!data) {
    return res.status(404).json({
      message: `Car with ID ${id} not found!`,
      data: null,
    });
  }
  const response = {
    data: data,
    message: `Ping Success`,
  };

  res.status(200).json(response);
};

exports.getCars = (req, res) => {
  const {
    id,
    plate,
    manufacture,
    model,
    capacity,
    availableAt,
    transmission,
    available,
    type,
    year,
  } = req.query;

  const data = carsUsecase.getCars(
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
  const response = {
    data: data,
    message: null,
  };
  res.status(200).json(response);
};

exports.postCars = (req, res, next) => {
  const {
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  payload = {
    id: uuidv4(id),
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  };
  if (!id || id == "") {
    return next({
      statusCode: 400,
      message: "id must be filled!",
    });
  }
  if (!plate || plate == "") {
    return next({
      statusCode: 400,
      message: "plate must be filled!",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 400,
      message: "manufacture must be filled!",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 400,
      message: "model must be filled!",
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 400,
      message: "image must be filled!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 400,
      message: "rentPerDay must be filled!",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 400,
      message: "capacity must be filled!",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 400,
      message: "description must be filled!",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 400,
      message: "availableAt must be filled!",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 400,
      message: "transmission must be filled!",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 400,
      message: "available must be filled!",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 400,
      message: "type must be filled!",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 400,
      message: "year must be filled!",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 400,

      message: "options must be filled!",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 400,
      message: "specs must be filled!",
    });
  }
  const data = carsUsecase.postCars(payload);
  const response = {
    data: data,
    message: null,
  };
  res.status(200).json(response);
};

exports.putCars = (req, res, next) => {
  const { id } = req.params;

  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return next({
      statusCode: 400,
      message: "plate must be filled!",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 400,
      message: "manufacture must be filled!",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 400,
      message: "model must be filled!",
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 400,
      message: "image must be filled!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 400,
      message: "rentPerDay must be filled!",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 400,
      message: "capacity must be filled!",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 400,
      message: "description must be filled!",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 400,
      message: "availableAt must be filled!",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 400,
      message: "transmission must be filled!",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 400,
      message: "available must be filled!",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 400,
      message: "type must be filled!",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 400,
      message: "year must be filled!",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 400,

      message: "options must be filled!",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 400,
      message: "specs must be filled!",
    });
  }

  const data = carsUsecase.putCars(id, req.body);
  const response = {
    data: data,
    message: "success",
  };
  res.status(200).json(response);
};

exports.DelCars = (req, res) => {
  const { id } = req.params;

  const data = carsUsecase.DelCars(id);
  const response = {
    data: data,
    message: "data di atas berhasil dihapus",
  };
  res.status(200).json(response);
};
