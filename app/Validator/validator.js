const {check} = require('express-validator');

exports.phone =
    [
        check('phone', 'Contact number is empty').not().isEmpty()
    ];