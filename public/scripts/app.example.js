class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.cariButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    // Register click listener
    this.clearButton.onclick = this.clear;
    // this.cariButton.addEventListener("click", this.run.bind(this));
    // this.cariButton.onclick = this.run;
    this.cariButton.addEventListener("click", async (event) => {
      event.preventDefault();
      await this.load();
    });
  }

  run = () => {
    const capacityInput = document.getElementById("capacity-input").value; // Mendapatkan nilai dari input dengan ID "capacity-input"
    // Menyaring mobil berdasarkan kapasitas yang diinputkan
    const filteredCars = Car.list.filter(
      (car) => car.capacity >= capacityInput
    );

    // Menampilkan mobil yang sesuai dengan filter
    filteredCars.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   node.classList.add("col-md-4");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);
    // });
  };

  async load() {
    this.carContainerElement.innerHTML = "";
    const cars = await Binar.listCars();
    Car.init(cars);
    const containerElement = this.carContainerElement;

    // Render mobil yang baru dimuat
    this.run(containerElement);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
