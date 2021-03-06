var config = require('./config/import.config.json')
var obj = {
    migration: {
        client: "postgres",
        connection: config.postgres,
        pool: {
          max:1
        }
    },
    integration: {
        client: "postgres",
        connection: config.postgres
    },
    staging: {
        client: "postgres",
        connection: config.postgres
    },
    production: {
        client: "postgres",
        connection: config.postgres
    }
};
// some call it integration
obj.development = obj.integration;
module.exports = exports = obj;
