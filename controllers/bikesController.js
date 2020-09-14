let Bikes = require('../models/bikes');

exports.listBikes = function (req, res) {
  res.render('bikes/index', { bikes: Bikes.allBikes });
};

exports.getCreateBike = function (req, res) {
  res.render('bikes/create');
};

exports.postCreateBike = function (req, res) {
  const bike = new Bikes(req.body.id, req.body.color, req.body.model);
  bike.location = [req.body.lat, req.body.lng];
  Bikes.add(bike);

  res.redirect('/bikes');
};

exports.getUpdateBike = function (req, res) {
  const bike = Bikes.findById(req.params.id);
  res.render('bikes/update', { bike });
};

exports.postUpdateBike = function (req, res) {
  const bike = Bikes.findById(req.params.id);
  bike.id = req.body.id;
  bike.color = req.body.color;
  bike.model = req.body.model;
  // const bike = new Bikes(req.body.id, req.body.color, req.body.model);
  bike.location = [req.body.lat, req.body.lng];

  res.redirect('/bikes');
};

exports.postDeleteBike = function (req, res) {
  Bikes.removeById(req.body.id);

  res.redirect('/bikes');
};
