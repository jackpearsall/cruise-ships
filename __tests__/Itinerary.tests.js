const Itinerary = require('../src/Itinerary');

describe('Itinerary constructor', () => {
  const dover = jest.fn();
  const calais = jest.fn();
  const itinerary = new Itinerary([dover, calais]);

  it('Itinerary can accept an array of ports', () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
