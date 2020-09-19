const Bikes = require('../../models/bikes');

beforeEach(() => {
  Bikes.allBikes = [];
});

describe('Bikes', () => {
  it('All bikes start empty?', () => {
    expect(Bikes.allBikes.length).toBe(0);
  });

  it('Add one bike?', () => {
    expect(Bikes.allBikes.length).toBe(0);
    const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
    Bikes.add(a);
    expect(Bikes.allBikes.length).toBe(1);
    expect(Bikes.allBikes[0]).toBe(a);
  });

  it('return bike with id 1', () => {
    expect(Bikes.allBikes.length).toBe(0);
    const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
    const b = new Bikes(2, 'blue', 'urban', [-34.6012424, -58.3861497]);
    Bikes.add(a);
    Bikes.add(b);

    const bikeFounded = Bikes.findById(1);

    expect(bikeFounded.id).toBe(1);
    expect(bikeFounded.color).toBe('red');
    expect(bikeFounded.model).toBe('urban');
  });

  it('delete the bike with id 1', () => {
    expect(Bikes.allBikes.length).toBe(0);
    const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
    const b = new Bikes(2, 'blue', 'urban', [-34.6012424, -58.3861497]);
    Bikes.add(a);
    Bikes.add(b);

    expect(Bikes.allBikes.length).toBe(2);

    Bikes.removeById(1);

    const bikeFounded = Bikes.allBikes.find((a) => a.id === 1);

    expect(Bikes.allBikes.length).toBe(1);
    expect(bikeFounded).toBe(undefined);
  });
});
