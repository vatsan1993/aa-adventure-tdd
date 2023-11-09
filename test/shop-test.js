const { expect } = require('chai');

const { Player } = require('../class/player.js');
const { Room } = require('../class/room.js');
const { Item } = require('../class/item.js');
const { Food } = require('../class/food.js');
const { DarkRoom } = require('../class/darkroom.js');
const { Light } = require('../class/light.js');
const { Shop } = require('../class/shop.js');
describe('Shop ', function () {
  it('Constructor - should have wallet', function () {
    const shop = new Shop();
    expect(shop.wallet).to.equal(20000);
  });

  it('shop can buy an item from player', function () {
    const itemsData = [
      {
        name: 'stone',
        description: 'used to craft items',
        price: 4,
      },
      {
        name: 'wood',
        description: 'used to craft items',
        price: 2,
      },
      {
        name: 'gold',
        description: 'used to craft items',
        price: 5,
      },
    ];

    let shop = new Shop();

    let items = itemsData.map(
      (data) => new Item(data.name, data.description, data.price)
    );

    shop.items = items;

    let player = new Player('Gold Soldier', shop);
    player.buy(itemsData[0]);

    expect(player.items.length).to.equal(1);
    expect(shop.items.length).to.equal(2);
    expect(shop.wallet).to.equal(20004);
    expect(player.wallet).to.equal(1496);
  });

  it('shop can sell an item to player', function () {
    const itemsData = [
      {
        name: 'stone',
        description: 'used to craft items',
        price: 4,
      },
      {
        name: 'wood',
        description: 'used to craft items',
        price: 2,
      },
      {
        name: 'gold',
        description: 'used to craft items',
        price: 5,
      },
    ];

    let shop = new Shop();
    let items = itemsData.map(
      (data) => new Item(data.name, data.description, data.price)
    );
    shop.items = items;
    let player = new Player('Gold Soldier', shop);

    let item = new Item('gold', 'Item is used for crafting', 5);
    player.items = [item];
    player.sell(item);
    expect(player.items.length).to.equal(0);
    expect(shop.items.length).to.equal(4);
    expect(shop.wallet).to.equal(19995);
    expect(player.wallet).to.equal(1505);
  });
});
