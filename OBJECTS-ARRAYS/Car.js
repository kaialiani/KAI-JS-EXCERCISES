export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  getCarInfo() {
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}`;
  }

  start() {
    this.isRunning = true;
    return `${this.make} ${this.model} has started.`;
  }

  stop() {
    this.isRunning = false;
    return `${this.make} ${this.model} has stopped.`;
  }
}


