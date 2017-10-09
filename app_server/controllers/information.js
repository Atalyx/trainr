/* GET 'home' or 'landing' page */
module.exports.landing = function(req, res) {
  res.render('landing-page', { title: 'trainr'} );
};

/* GET 'pricing' page */
module.exports.pricing = function(req, res) {
  res.render('pricing-page', { title: 'Pricing'} );
};

/* GET 'contact' page */
module.exports.contact = function(req, res) {
  res.render('contact-us-page', { title: 'Contact'} );
};

/* GET 'features' page */
module.exports.features = function(req, res) {
  res.render('features', { title: 'Features'} );
};

/* GET 'exercise list' page */
module.exports.exercises = function(req, res) {
  res.render('exercises', { title: 'Exercises'} );
};

/* GET 'exercise info' page */
module.exports.exerciseInfo = function(req, res) {
  res.render('index', { title: 'Exercise Info'} );
};

/* GET 'Add Exercise' page */
module.exports.exerciseNew = function(req, res) {
  res.render('index', { title: 'New Exercise'} );
};
