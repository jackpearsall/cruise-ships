const Ship = require('../src/Ship.js');

describe('Ship', () => {
  it('A new ship can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const ship = new Ship('Dover');
    expect(ship.startingPort).toBe('Dover');
  });
});
