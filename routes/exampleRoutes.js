const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const logger = require('../middlewares/exampleMiddleware');

router.use(logger);

router.post('/examples', exampleController.createExample);
router.get('/examples', exampleController.getExamples);

module.exports = router;