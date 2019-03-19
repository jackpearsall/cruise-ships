const Ship = require('../src/Ship.js');

describe('Ship', () => {
  let dover;
  let calais;
  let itinerary;
  let ship;
  const port = {
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };
  beforeEach(() => {
    dover = { ...port, name: 'Dover', ships: [] };
    calais = { ...port, name: 'Calais', ships: [] };
    itinerary = { ports: [dover, calais] };
    ship = new Ship(itinerary);
  });
  it('A new ship can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort.name).toBe('Dover');
  });
  it('Ship can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
  it('Ship can dock at different ports', () => {
    ship.setSail();
    ship.dock();
    expect(calais.addShip).toHaveBeenCalledWith(ship);
    expect(ship.currentPort).toBeTruthy();
    expect(ship.currentPort).toEqual(calais);
  });
  it('gets added to port on instantiation', () => {
    expect(port.addShip).toHaveBeenCalledWith(ship);
  });
});
