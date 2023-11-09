const { Item } = require('./item');

class Food extends Item {
  constructor(name, description, price) {
    super(name, description, 10);
    this.isFood = true;
  }
}

module.exports = {
  Food,
};
