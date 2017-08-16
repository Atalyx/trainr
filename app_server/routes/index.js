var express = require('express');
var router = express.Router();
var ctrlInfo = require('../controllers/information');
var ctrlAcct = require('../controllers/account');
var ctrlDash = require('../controllers/dashboard');

/* information Pages */
router.get('/', ctrlInfo.landing);
router.get('/pricing', ctrlInfo.pricing);
router.get('/contact', ctrlInfo.contact);
router.get('/exercises', ctrlInfo.exercises);
router.get('/exercises/exercise-name', ctrlInfo.exerciseInfo);        // This will become a specific exercise name
router.get('/exercises/new', ctrlInfo.exerciseNew);

/* Dashboard Pages */
router.get('/dashboard', ctrlDash.dashboard);
router.get('/dashboard/clients', ctrlDash.clients);
router.get('/dashboard/clients/client-name', ctrlDash.clientInfo);    // This will become a specific client name
router.get('/dashboard/clients/new', ctrlDash.clientNew);
router.get('/dashboard/assessments', ctrlDash.assessments);
router.get('/dashboard/assessments/assessment-name', ctrlDash.assessmentInfo);    // This will become a specific assessment name
router.get('/dashboard/assessments/new', ctrlDash.assessmentNew);
router.get('/dashboard/workouts', ctrlDash.workouts);
router.get('/dashboard/workouts/workouts-name', ctrlDash.workoutInfo);    // This will become a specific workout name
router.get('/dashboard/workouts/new', ctrlDash.workoutNew);

/* Account Management Pages */
router.get('/account', ctrlAcct.account);
router.get('/account/user', ctrlAcct.user);     // Replace with username
router.get('/register', ctrlAcct.register);
router.get('/login', ctrlAcct.login);


module.exports = router;
