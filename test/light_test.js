const { expect } = require('chai');

const { Player } = require('../class/player.js');
const { Room } = require('../class/room.js');
const { Item } = require('../class/item.js');
const { Food } = require('../class/food.js');
const { DarkRoom } = require('../class/darkroom.js');
const { Light } = require('../class/light.js');
describe('Light ', function () {
  it('Constructor - should have name , description and visibility attributes', function () {
    let light = new Light();
    expect(light.name).to.equal('Light');
    expect(light.description).to.equal(
      'An item that can light up a dark room '
    );
    expect(light.pickedUp).to.be.false;
  });
});
