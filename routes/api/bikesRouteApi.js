const express = require('express');
const router = express.Router();
const bikesController = require('./../../controllers/api/bikeControllerApi');

router.get('/', bikesController.listBikes);
router.post('/create', bikesController.createBike);
router.put('/update', bikesController.updateBike);
router.delete('/delete', bikesController.deleteBike);

module.exports = router;
