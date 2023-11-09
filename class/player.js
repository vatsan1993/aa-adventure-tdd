const { Character } = require('./character');
const { Enemy } = require('./enemy');
const { Food } = require('./food');
const { DarkRoom } = require('./darkroom.js');
const { Light } = require('./light.js');
const { Shop } = require('./shop.js');
class Player extends Character {
  constructor(name, startingRoom) {
    super(name, 'main character', startingRoom);
    this.wallet = 1500;
  }
  buy(item) {
    if (this.wallet > 0 && this.currentRoom instanceof Shop) {
      this.currentRoom.sell(item);
      this.items.push(item);
      this.wallet -= item.price;
    }
  }
  sell(item) {
    if (this.currentRoom.buy(item)) {
      for (let i = 0; i < this.items.length; i++) {
        if ((item.name = this.items[i].name)) {
          this.items.splice(i, 1);
          this.wallet += item.price;
        }
      }
    }
  }

  turnOnLight() {
    for (let item of this.items) {
      if (item instanceof Light && this.currentRoom instanceof DarkRoom) {
        this.currentRoom.visible = true;
        break;
      }
    }
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log('You cannot move in that direction');
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let index = 0;
    for (; index < this.currentRoom.items.length; index++) {
      let item = this.currentRoom.items[index];
      if (item.name === itemName) {
        let removedItem = this.currentRoom.items.splice(index, 1);
        this.items.push(removedItem[0]);
        break;
      }
    }
  }

  dropItem(itemName) {
    // Fill this in
    for (let index = 0; index < this.items.length; index++) {
      let item = this.items[index];
      if (item.name === itemName) {
        this.items.splice(index, 1);
        this.currentRoom.items.push(item);
        return item;
      }
    }
  }

  eatItem(itemName) {
    // Fill this in
    let index = 0;
    for (; index < this.items.length; index++) {
      let item = this.items[index];
      if (!item.isFood) {
        continue;
      }
      if (item.name === itemName) {
        break;
      }
    }
    this.items.splice(index, 1);
  }

  getItemByName(name) {
    // Fill this in
    for (let item of this.items) {
      if (item.name === name) {
        return item;
      }
    }
    return null;
  }

  hit(name) {
    // Fill this in
    let enemy = this.currentRoom.getEnemyByName(name);
    enemy.setPlayer(this);
    enemy.setAttackTarget();
  }

  die() {
    console.log('You are dead!');
    process.exit();
  }
}

module.exports = {
  Player,
};
