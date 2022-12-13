const path = require('path');
const express = require('express');
const morgan = require('morgan');

const policyholderRouter = require('./routes/policyholderRoutes');
const insuranceRouter = require('./routes/insuranceRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//^ 1) Global middlewares
//~Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//^Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

//^Routes
app.use('/sprava-pojistencu', policyholderRouter);
app.use('/sprava-pojisteni', insuranceRouter);

app.get('/rozcestnik', (req, res) => {
  res.status(200).render('signpost', {
    title: 'Rozcestník',
  });
});

app.get('/', (req, res) => {
  res.status(200).render('base');
});

module.exports = app;
