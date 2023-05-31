const express = require('express');
const router = express.Router();
const validator = require('../app/Validator/validator');
const Controller = require('../app/Http/Controller/FirebaseSMSController');

const cors = require('cors');
router.use(cors());

/**
 * @description Get Crawler URL
 * @method POST
 * @access Public
 *
 */
router.post('/', validator.phone, Controller.sendSMS);

module.exports = router;