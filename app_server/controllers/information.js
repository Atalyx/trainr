/* GET 'home' or 'landing' page */
module.exports.landing = function(req, res) {
  res.render('index', { title: 'trainr'} );
};

/* GET 'pricing' page */
module.exports.pricing = function(req, res) {
  res.render('index', { title: 'Pricing'} );
};

/* GET 'exercise list' page */
module.exports.exercises = function(req, res) {
  res.render('index', { title: 'Exercises'} );
};

/* GET 'exercise info' page */
module.exports.exerciseInfo = function(req, res) {
  res.render('index', { title: 'Exercise Info'} );
};

/* GET 'Add Exercise' page */
module.exports.exerciseNew = function(req, res) {
  res.render('index', { title: 'New Exercise'} );
};
