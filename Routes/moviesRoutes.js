const express = require('express');
const router = express.Router();

const moviesControllers = require ( '../controllers/moviesControllers');

router.get('/', moviesControllers.index);
router.post('/', moviesControllers.insert);
router.put('/:id', moviesControllers.update);
router.delete('/:id', moviesControllers.delete)

module.exports = router;