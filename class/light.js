const { Item } = require('./item.js');

class Light extends Item {
  constructor() {
    super('Light', 'An item that can light up a dark room ');
    this.pickedUp = false;
  }
}

module.exports = {
  Light,
};
