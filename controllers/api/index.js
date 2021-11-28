const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

router.use('/', userRoutes);
router.use('/', postRoutes);

module.exports = router;