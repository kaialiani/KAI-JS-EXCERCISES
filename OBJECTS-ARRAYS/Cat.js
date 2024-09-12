export class Cat {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  getCatData() {
    return `Name: ${this.name}, Color: ${this.color}, Breed: ${this.breed}`;
  }

  changeName(newName) {
    this.name = newName;
  }
}
