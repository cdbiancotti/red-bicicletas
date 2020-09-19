let Bikes = function (id, color, model, location) {
  this.id = id;
  this.color = color;
  this.model = model;
  this.location = location;
};

Bikes.prototype.toString = function () {
  return `id: ${this.id} | color: ${this.color}`;
};

Bikes.allBikes = [];
Bikes.add = function (aBike) {
  Bikes.allBikes.push(aBike);
};

Bikes.findById = function (aBikeId) {
  const aBike = Bikes.allBikes.find((x) => x.id == aBikeId);
  if (aBike) return aBike;
  else throw new Error(`The Bike with id:${aBikeId} doesn't exist.`);
};

Bikes.removeById = function (aBikeId) {
  Bikes.allBikes = Bikes.allBikes.filter((x) => x.id != aBikeId);
};
// const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
// const b = new Bikes(2, 'white', 'urban', [-34.596932, -58.3808287]);

// Bikes.add(a);
// Bikes.add(b);

module.exports = Bikes;
