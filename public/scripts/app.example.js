class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.cariButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    // Register click listener
    // this.clearButton.onclick = this.clear; (tidak digunakan)
    this.cariButton.addEventListener("click", async (event) => {
      event.preventDefault();
      await this.load();
    });
  }

  run = () => {
    const capacityInput = document.getElementById("capacity-input").value;
    const nameCarInput = document.getElementById("car-name").value;
    const typeCarInput = document.getElementById("car-type").value;
    const dateInput = document.getElementById("date").value;

    // Menyaring mobil berdasarkan yang diinputkan

    const filteredCars = Car.list.filter(
      (car) =>
        car.available === true && //menyaring mobil yang available nya true
        (capacityInput === "" || car.capacity >= capacityInput) && // menyaring mobil sesuai capacity
        (nameCarInput === "" ||
          car.manufacture //menyaring sesuai nama brand mobil
            .toLowerCase()
            .includes(nameCarInput?.toLowerCase())) &&
        (typeCarInput === "" || //menyaring sesuai tipe dari brand mobil
          car.model.toLowerCase().includes(typeCarInput?.toLowerCase()))
      // (dateInput === "" || car.availableAt == dateInput) // karena dalam data semua tanggal, waktu dan tahun sama, mungkin ini tidak terlalu berfungsi jadi saya comment saja
    );

    // Menampilkan mobil yang sesuai dengan filter
    filteredCars.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };
  //load() yang lama sebelum menggunakan fetch
  // async load() {
  //   this.carContainerElement.innerHTML = "";
  //   const cars = await Binar.listCars();
  //   Car.init(cars);
  //   const containerElement = this.carContainerElement;

  //   // Render mobil yang baru dimuat
  //   this.run(containerElement);
  // }

  async load() {
    this.carContainerElement.innerHTML = "";

    try {
      //menggunakan fetch untuk mengambil data cars
      const response = await fetch("/cars");

      if (!response.ok) {
        throw new Error(`Failed to fetch cars: ${response.statusText}`);
      }

      const { data, message } = await response.json();
      Car.init(data);
      const containerElement = this.carContainerElement;

      // Render mobil yang baru dimuat
      this.run(containerElement);
    } catch (error) {
      console.error("Error loading cars:", error);
    }
  }
  // tombol clear sudah tidak digunakan
  // clear = () => {
  //   let child = this.carContainerElement.firstElementChild;

  //   while (child) {
  //     child.remove();
  //     child = this.carContainerElement.firstElementChild;
  //   }
  // };
}
