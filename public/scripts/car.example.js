class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
  
<div class="card m-2 g-2">
  <img class="card-img-top car-img img-fluid" src="${this.image}" alt="Card image cap" />
  <div class="card-body car-card-body pb-3 px-3 d-flex flex-column">
    <h5 class="card-title car-card-title pt-3">
      ${this.manufacture} ${this.model}
    </h5>
    <p class="card-title car-card-rent fw-semibold">Rp ${this.rentPerDay} / Hari</p>
    <p class="card-text py-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="card-text car-capacity">
      <img src="asset/img/fi_users.png" /> ${this.capacity} Orang
    </div>
    <div class="card-text car-transmission">
      <img src="asset/img/fi_settings.png" /> ${this.transmission}
    </div>
    <div class="card-text car-year">
      <img src="asset/img/fi_calendar.png" /> Tahun ${this.year}
    </div>
    <div class="d-grid gap-2 pt-3">
      <button class="btn btn-success py-3" type="button">Pilih Mobil</button>
    </div>
  </div>
</div>
    `;
  }
}
