const express = require('express');
const router = express.Router();
const {editUser, getUserInfo, forgotPassword, resetPassword, getUser, checkUsernameAvailability } = require('../../../../controllers/userController');
const { isLoggedIn  } = require('../../../middleware/../../middleware/isLoggedIn');



router.get('/api/v1/user/:userId', isLoggedIn, getUser);
router.get('/getuserinfo/:uniqueID', getUserInfo);
router.get('/check-username', checkUsernameAvailability);
router.post('/api/v1/user/forgotpassword', forgotPassword);
router.patch('/api/v1/user/resetpassword/:token', resetPassword);
router.patch('/api/v1/user/:userid', isLoggedIn, editUser);




module.exports = router;
