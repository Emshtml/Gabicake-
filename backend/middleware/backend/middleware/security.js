const security = require('./middleware/security');
app.use(security.csrfProtection);
app.use(security.sanitizeInputs);
