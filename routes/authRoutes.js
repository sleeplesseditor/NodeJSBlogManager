const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        (req, res, next) => {
            passport.authenticate('auth0', {
                scope: ['openid', 'profile', 'email'],
                responseType: 'code'
            })(req, res, next);
        }
    );

    app.get(
        '/auth/google/callback',
        (req, res, next) => {
            passport.authenticate('auth0', (err, user, info) => {
                if (err) {
                    console.error('Auth0 callback error:', err);
                    return res.status(500).send(`Auth0 callback error: ${err.message || err}`);
                }

                if (!user) {
                    console.error('Auth0 callback failed:', info);
                    return res.status(401).send(`Auth0 callback failed: ${JSON.stringify(info)}`);
                }

                req.logIn(user, loginErr => {
                    if (loginErr) {
                        console.error('Login error after Auth0 callback:', loginErr);
                        return res.status(500).send(`Login error: ${loginErr.message || loginErr}`);
                    }

                    return res.redirect('http://localhost:5173/blogs');
                });
            })(req, res, next);
        }
    );

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
