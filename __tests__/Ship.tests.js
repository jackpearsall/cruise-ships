const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
  it('A new ship can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
  it('Ship can set sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
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
  // it('gets added to port on instantiation', () => {
  //   const dover = new Port('Dover');
  //   const itinerary = new Itinerary([dover]);
  //   const ship = new Ship(itinerary);
  //   expect(dover.ships).toContain(ship);
  // });
});
