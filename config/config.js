module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_KEY || "root",
    "database": process.env.MYSQL_DBNAME || "petquora",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "port": process.env.MYSQL_PORT || 8889,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
