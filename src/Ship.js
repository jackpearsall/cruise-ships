function Ship(currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = null;
};

Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};

module.exports = Ship;
