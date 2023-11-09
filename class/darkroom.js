const { Room } = require('./room');

class DarkRoom extends Room {
  constructor(name, description) {
    super(name, description);
    this.visible = false;
  }
}
module.exports = {
  DarkRoom,
};
