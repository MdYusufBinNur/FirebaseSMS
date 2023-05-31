const service = require('../Service/SMSService')
const {validationResult} = require('express-validator');

module.exports = {
    sendSMS : (req, res) => {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(401).json({errors: errors.array()});
        }
        return service.sendSMS(req, res)
    }
}