const express = require('express');
const usersController = require('../controllers/user.controller');

const router = express.Router();

router.route('/random').get(usersController.getRandomUser);

router.route('/all').get(usersController.getAllUser);

router.route('/save').post(usersController.addRandomUser);

router.route('/update/:id').patch(usersController.updateRandomUser);

router.route('/bulk-update').patch(usersController.multiUserUpdate);

router.route('/delete').delete(usersController.deleteRandomUser);

module.exports = router;
