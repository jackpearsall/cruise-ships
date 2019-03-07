const Port = require('../src/Port.js');

describe('Port', () => {
  it('A new port can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('A new port has a name property', () => {
    expect(new Port(Port)).toEqual({ name: Port });
  });
});
