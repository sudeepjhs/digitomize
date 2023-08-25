const express = require('express');
const { handleUserSignup, handleUserLogin } = require('../../controllers/user/authController');
const { handleUserDashboard } = require('../../controllers/user/userDashboardController');
const { handleUserProfilePreview } = require('../../controllers/user/userProfileController');
const { handleUpdateUserProfile } = require('../../controllers/user/userUpdateController');
const { checkAuth, addUID, checkUserOwnership } = require('../../middlewares/authMiddleware');
const { checkLoggedIn } = require('../../services/checkLoggedIn');


const router = express.Router();

// POST route for user signup
router.post('/signup', addUID, handleUserSignup);

// router.get('/signout', checkAuth, handleUserSignout);

// router.get('/dashboard', addUID, handleUserDashboard);

router.get('/profile/:username', handleUserProfilePreview);

router.post('/profile/:username', checkAuth, checkUserOwnership, handleUpdateUserProfile);

router.post('/isLoggedin', checkLoggedIn);

module.exports = router;
