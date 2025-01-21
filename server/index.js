const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'https://eventify-6msiwn79f-sumit-sagars-projects-3b03c4db.vercel.app', credentials: true }));
app.use(express.json());
app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: false }));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { profile, accessToken });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly'] }));
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  // (req, res) => res.redirect('http://localhost:3000/dashboard') // 
  (req, res) => res.redirect('https://eventify-6msiwn79f-sumit-sagars-projects-3b03c4db.vercel.app/dashboard') 
);

app.get('/auth/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).send('Logout error');
    res.redirect('/');
  });
});

app.get('/auth/status', (req, res) => res.send(req.user || null));


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
