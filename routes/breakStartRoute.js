const express = require('express');
const { breakStartController, breakEndController } = require('../contollers/breakController');
const router = express.Router();

router.post('/attendance/:id/breakStart', breakStartController)
router.post('/attendance/:id/breakEnd', breakEndController)
module.exports = router;