let path = require('path');
let config;

config = {
  mail: {},
  database: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '/content/data/nukehome.db')
    },
    debug: false
  },

  server: {
    host: '127.0.0.1',
    port: '2368'
  }
};

// Export config
module.exports = config;
