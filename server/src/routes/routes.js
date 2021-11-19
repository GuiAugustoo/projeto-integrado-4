const express = require('express');
const router = express.Router();

const OngController = require('../controller/OngController');
const OngValidation = require('../middlewares/OngValidation');

const ScheduledController = require('../controller/ScheduledController');
const ScheduledValidation = require('../middlewares/ScheduledValidation');

//Hospital Routes
router.post('/ong', OngValidation, OngController.create);
router.put('/ong/:id', OngController.update);
router.get('/ong/filter/all', OngController.all);
router.delete('/ong/:id', OngController.delete);

//Hospital Routes
router.post('/schedules', ScheduledValidation, ScheduledController.create);
router.put('/schedules/:id', ScheduledController.update);
router.get('/schedules/filter/all', ScheduledController.all);
router.delete('/schedules/:id', ScheduledController.delete);

module.exports = router;

