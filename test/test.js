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