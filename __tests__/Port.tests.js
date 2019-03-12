const Port = require('../src/Port.js');

describe('Port', () => {
  it('A new port can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('A new port has a name property', () => {
    expect(new Port('Dover').port).toEqual('Dover');
  });
  it('A port can add a ship to it\'s ship array', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('A port can remove a ship from it\'s ship array', () => {
    const port = new Port('Dover');
    const titanic = { name: 'Titanic' };
    const queenMary = { name: 'Queen Mary' };
    const ssGreatBritain = { name: 'SS Great Britain' };
    const anotherShip = { name: 'Another Ship' };
    port.addShip(titanic);
    port.addShip(queenMary);
    port.addShip(ssGreatBritain);
    port.addShip(anotherShip);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([{ name: 'Titanic' }, { name: 'SS Great Britain' }, { name: 'Another Ship' }]);
    port.removeShip(titanic);
    expect(port.ships).toEqual([{ name: 'SS Great Britain' }, { name: 'Another Ship' }]);
  });
});
