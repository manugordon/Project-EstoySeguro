module.exports =

{
  "development": {
    "username": "root",
    "password": "root",
    "port": 3306,
    "database": "segurosdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    }
    
  },
  "test": {
    "username": "root",
    "password": "",
    "port": 3306,
    "database": "esegurodb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "port": 3306,
    "database": "esegurodb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
