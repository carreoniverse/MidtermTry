var router = require('express').Router();

var authMiddleware = require('../auth/middlewares/auth');

router.use(authMiddleware.hasAuth);
router.use('/users', require('./users/routes'));

router.use(authMiddleware.isAdmin)

router.use('/categories', require('./categories/routes'));
exports.admin = router;