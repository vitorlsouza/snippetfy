const express = require('express');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.use('/app', authMiddleware);

routes.get('/', guestMiddleware, authController.signin);
routes.get('/signup', guestMiddleware, authController.signup);
routes.get('/signout', authController.signout);

routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

routes.get('/app/dashboard', dashboardController.index);

routes.use((req, res) => res.render('errors/404'));

routes.use((error, req, res, _next) => {
  res.status(error.status || 500);

  return res.render('errors/index', {
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error,
  });
});

module.exports = routes;
