const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controller/userController');


// Route POST để thêm người dùng mới
router.post('/add-user', createUser);
router.get('/users',getAllUsers);


module.exports = router;