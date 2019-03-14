function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(shipToRemove) {
  const shipIndex = this.ships.indexOf(shipToRemove);
  this.ships.splice(shipIndex, 1);
};

module.exports = Port;
