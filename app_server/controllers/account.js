/* GET 'account' page */
module.exports.account = function(req, res) {
  res.render('index', { title: 'Account Management'} );
};

/* GET 'user profile' page */
module.exports.user = function(req, res) {
  res.render('index', { title: 'User Profile'} );
};

/* GET 'register' page */
module.exports.register = function(req, res) {
  res.render('index', { title: 'Create Account'} );
};

/* GET 'login' page */
module.exports.login = function(req, res) {
  res.render('index', { title: 'Login'} );
};
