const { expect } = require('chai');

const { Player } = require('../class/player.js');
const { Room } = require('../class/room.js');
const { Item } = require('../class/item.js');
const { Food } = require('../class/food.js');
const { DarkRoom } = require('../class/darkroom.js');
const { Light } = require('../class/light.js');
describe('Dark Room', function () {
  it('Constructor - should have name , description and visibility attributes', function () {
    let darkRoom = new DarkRoom('Room5', 'A dark room ');

    expect(darkRoom.name).to.equal('Room5');
    expect(darkRoom.description).to.equal('A dark room ');
    expect(darkRoom.visible).to.be.false;
  });

  it('Player can have dark room ', function () {
    let darkRoom = new DarkRoom('Test Room', 'A test room');
    let player = new Player('player', darkRoom);

    expect(player.currentRoom).to.equal(darkRoom);
  });

  it('Darkroom lights up when player turns on the light ', function () {
    let light = new Light();
    light.pickedUp = true;
    let darkRoom = new DarkRoom('Test Room', 'A test room');
    let player = new Player('player', darkRoom);
    player.items.push(light);
    player.turnOnLight();

    expect(player.currentRoom.visible).to.be.true;
  });
  it('Darkroom should be dark if player does not have a light ', function () {
    let darkRoom = new DarkRoom('Test Room', 'A test room');
    let player = new Player('player', darkRoom);
    player.turnOnLight();

    expect(player.currentRoom.visible).to.be.false;
  });
});
