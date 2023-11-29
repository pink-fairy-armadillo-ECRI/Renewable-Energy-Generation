const { Pool } = require('pg');

const PG_URI =
  'postgres://seqsauua:p9T5gY2jL-A5IOk6sVlK70cDj6LHL_xn@isilo.db.elephantsql.com/seqsauua';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
