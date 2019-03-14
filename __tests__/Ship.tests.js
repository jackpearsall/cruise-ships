const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;
    beforeEach(() => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });
    it('A new ship can be instantiated', () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Object);
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
      expect(ship.currentPort).toBe(calais);
      expect(calais.ships).toContain(ship);
    });
    it('gets added to port on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });
  });
});
