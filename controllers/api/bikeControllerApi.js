const Bikes = require('./../../models/bikes');

exports.listBikes = function (req, res) {
  res.status(200).json({
    bikes: Bikes.allBikes,
  });
};

exports.createBike = function (req, res) {
  const bike = new Bikes(req.body.id, req.body.color, req.body.model);
  bike.location = [req.body.lat, req.body.lng];

  Bikes.add(bike);

  res.status(200).json({
    bike: bike,
  });
};

exports.updateBike = function (req, res) {
  const bike = Bikes.findById(req.body.id);
  bike.id = req.body.id;
  bike.color = req.body.color;
  bike.model = req.body.model;
  bike.location = [req.body.lat, req.body.lng];

  res.status(200).json({
    bike: bike,
  });
};

exports.deleteBike = function (req, res) {
  Bikes.removeById(req.body.id);
  res.status(204).send();
};
