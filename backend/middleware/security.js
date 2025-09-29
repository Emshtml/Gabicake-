// middleware/security.js
const csrf = require('csurf');
const { body, validationResult } = require('express-validator');
const xss = require('xss-clean');

const csrfProtection = csrf({ cookie: true });

const sanitizeInputs = [
  xss(),
  body('*').trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  csrfProtection,
  sanitizeInputs,
};
