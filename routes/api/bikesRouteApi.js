const express = require('express');
const router = express.Router();
const bikesController = require('./../../controllers/api/bikeControllerApi');

router.get('/', bikesController.listBikes);
router.post('/create', bikesController.createBike);
// router.post('/create', bikesController.postCreateBike);
// router.get('/:id/update', bikesController.getUpdateBike);
// router.post('/:id/update', bikesController.postUpdateBike);
router.delete('/delete', bikesController.deleteBike);

module.exports = router;
