const Port = require('../src/Port.js');

describe('Port', () => {
  let port;
  beforeEach(() => {
    port = new Port('Dover');
  });
  it('A new port can be instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });
  it('A new port has a name property', () => {
    expect(port.name).toEqual('Dover');
    expect(port.ships).toEqual([]);
  });
  it('A port can add a ship to it\'s ship array', () => {
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('A port can remove a ship from it\'s ship array', () => {
    const titanic = { name: 'Titanic' };
    const queenMary = { name: 'Queen Mary' };
    const ssGreatBritain = { name: 'SS Great Britain' };
    port.addShip(titanic);
    port.addShip(queenMary);
    port.addShip(ssGreatBritain);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([{ name: 'Titanic' }, { name: 'SS Great Britain' }]);
    port.removeShip(titanic);
    expect(port.ships).toEqual([{ name: 'SS Great Britain' }]);
  });
});
