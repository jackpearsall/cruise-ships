function Ship(startingPort) {
  this.startingPort = startingPort;
}

Ship.prototype.setSail = function setSail() {
  this.startingPort = null;
};

module.exports = Ship;
