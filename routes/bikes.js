const express = require('express');
const router = express.Router();
const bikesController = require('../controllers/bikesController');

router.get('/', bikesController.listBikes);
router.get('/create', bikesController.getCreateBike);
router.post('/create', bikesController.postCreateBike);
router.get('/:id/update', bikesController.getUpdateBike);
router.post('/:id/update', bikesController.postUpdateBike);
router.post('/:id/delete', bikesController.postDeleteBike);

module.exports = router;
