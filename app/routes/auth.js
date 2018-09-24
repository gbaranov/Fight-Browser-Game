var authController = require('../controllers/authcontroller.js');
var models = require("../models/index");

 
 
module.exports = function(app, passport) {
    var charSelected;
 
    
    app.get('/welcome', authController.welcome);

    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);

    app.get('/leaderboard', authController.leaderboard);

 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
 
    ));

    app.get('/logout', authController.logout);

    app.get('/dashboard', isLoggedIn, authController.dashboardChose);
    app.get('/fight', isLoggedIn, authController.dashboardFight);
    
    app.post('/api/userdata', function(req, res) {
        charSelected = req.body.data.id;
        userName = req.body.data.characterName;
    });

    app.get('/api/userdata', function(req, res) {

        models.char.findAll().then(function(data) {
            res.json({
                userSelected: charSelected,
                userNameSelected: userName,
                chars : data
            });
        });

 
    });
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}