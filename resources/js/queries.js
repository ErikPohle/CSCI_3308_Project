//Queries.js


const {Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hunger',
  password: '123',
  port: 5432,
});

const getRestaurants = (request, response) => {

  var resp = '';
  for(i = 1; i < 14; i++)
  {
    pool.query('SELECT restaurant_name FROM restaurants', (error, results) => {
      if (error) {
        throw error;
      }
  }
    response.status(200).json(results.rows)
  })
};
