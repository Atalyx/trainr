/* GET 'dashboard' page */
module.exports.dashboard = function(req, res) {
  res.render('dashboard', { title: 'Dashboard'} );
};

/* GET 'client list' page */
module.exports.clients = function(req, res) {
  res.render('clients', { title: 'Clients'} );
};

/* GET 'client info' page */
module.exports.clientInfo = function(req, res) {
  res.render('index', { title: 'Client Info'} );
};

/* GET 'add client' page */
module.exports.clientNew = function(req, res) {
  res.render('index', { title: 'New Client'} );
};

/* GET 'assessments' page */
module.exports.assessments = function(req, res) {
  res.render('assessments', { title: 'Assessments'} );
};

/* GET 'assessments info' page */
module.exports.assessmentInfo = function(req, res) {
  res.render('index', { title: 'Assessment Info'} );
};

/* GET 'new assessments' page */
module.exports.assessmentNew = function(req, res) {
  res.render('index', { title: 'New Assessment'} );
};

/* GET 'workouts' page */
module.exports.workouts = function(req, res) {
  res.render('workouts', { title: 'Workouts'} );
};

/* GET 'workout info' page */
module.exports.workoutInfo = function(req, res) {
  res.render('index', { title: 'Workout Info'} );
};

/* GET 'workouts' page */
module.exports.workoutNew = function(req, res) {
  res.render('index', { title: 'New Workout'} );
};
