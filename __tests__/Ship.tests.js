const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
  it('A new ship can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const ship = new Ship(Port);
    expect(ship.currentPort).toBe(Port);
  });
  it('Ship can set sail', () => {
    const ship = new Ship(Port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('Ship can dock at different ports', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    const calais = new Port('calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
