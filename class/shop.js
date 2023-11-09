const { Room } = require('./room');

class Shop extends Room {
  constructor() {
    super('Shop', 'Can be used to sell or buy items');
    this.wallet = 20000;
  }
  buy(item) {
    if (this.wallet > item.price) {
      this.items.push(item);
      this.wallet -= item.price;
      return true;
    } else {
      return false;
    }
  }
  sell(item) {
    for (let i = 0; i < this.items.length; i++) {
      if ((item.name = this.items[i].name)) {
        this.items.splice(i, 1);
        this.wallet += item.price;
        break;
      }
    }
  }
}

module.exports = {
  Shop,
};
