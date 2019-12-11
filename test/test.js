const request = require('supertest');
const express = require('express');

const app = express();

app.get('/index', function(req, res) {
  res.status(200).json({ name: 'index' });
});

app.get('/Mcdonalds', function(req, res) {
  res.status(200).json({ name: 'Mcdonalds Menu' });
});

app.get('/Mcdonalds', function(req, res) {
  res.status(200).json({ name: 'Mcdonalds Menu' });
});

app.get('/Qdoba', function(req, res) {
  res.status(200).json({ name: 'Qdoba Menu' });
});

app.get('/Cafemexicali', function(req, res) {
  res.status(200).json({ name: 'Cafe Mexicali Menu' });
});

app.get('/Cosmos', function(req, res) {
  res.status(200).json({ name: 'Cosmos Menu' });
});

app.get('/Dominos', function(req, res) {
  res.status(200).json({ name: 'Dominos Menu' });
});

app.get('/Fiveguys', function(req, res) {
  res.status(200).json({ name: 'Five Guys Menu' });
});

app.get('/index', function(req, res) {
  res.status(200).json({ name: 'Index' });
});

app.get('/Mcdonalds', function(req, res) {
  res.status(200).json({ name: 'Mcdonalds Menu' });
});

app.get('/Pizzahut', function(req, res) {
  res.status(200).json({ name: 'Pizza Hut Menu' });
});

app.get('/Potbelly', function(req, res) {
  res.status(200).json({ name: 'Potbelly Menu' });
});

app.get('/Subway', function(req, res) {
  res.status(200).json({ name: 'Subway Menu' });
});

app.get('/about', function(req, res) {
  res.status(200).json({ name: 'About' });
});

app.get('/team_members', function(req, res) {
  res.status(200).json({ name: 'Team Members' });
});

app.get('/Wendys', function(req, res) {
  res.status(200).json({ name: 'Wendys Menu' });
});

// index pages loads
request(app)
  .get('/index')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '16')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

// mcdonalds menu loads
request(app)
  .get('/Mcdonalds')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '25')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

// qdoba menu loads
request(app)
  .get('/Qdoba')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '21')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

// cafe mexicali menu loads
request(app)
.get('/Cafemexicali')
.expect('Content-Type', /json/)
.expect('Content-Length', '29')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// about loads
request(app)
.get('/about')
.expect('Content-Type', /json/)
.expect('Content-Length', '16')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// cosmos menu loads
request(app)
.get('/Cosmos')
.expect('Content-Type', /json/)
.expect('Content-Length', '22')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// dominos menu loads
request(app)
.get('/Dominos')
.expect('Content-Type', /json/)
.expect('Content-Length', '23')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// fiveguys menu loads
request(app)
.get('/Fiveguys')
.expect('Content-Type', /json/)
.expect('Content-Length', '25')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// mcdonalds menu loads
request(app)
.get('/Mcdonalds')
.expect('Content-Type', /json/)
.expect('Content-Length', '25')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// pizzahut menu loads
request(app)
.get('/Pizzahut')
.expect('Content-Type', /json/)
.expect('Content-Length', '25')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// potbelly menu loads
request(app)
.get('/Potbelly')
.expect('Content-Type', /json/)
.expect('Content-Length', '24')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// subway menu loads
request(app)
.get('/Subway')
.expect('Content-Type', /json/)
.expect('Content-Length', '22')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// team_members menu loads
request(app)
.get('/team_members')
.expect('Content-Type', /json/)
.expect('Content-Length', '23')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});

// wendys menu loads
request(app)
.get('/Wendys')
.expect('Content-Type', /json/)
.expect('Content-Length', '22')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});