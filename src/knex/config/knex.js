module.exports = {
    "development": {
        "client": "mysql",
        "connection": {
            "host": "localhost",
            "port":"3306",
            "user": "root",
            "password": "password",
            "database": "rewaa",
            "charset": "utf8"
        },
        "pool": {
            "min": 2,
            "max": 10
        },
        "migrations": {
            "directory": "../migrations",
            "tableName": "knex_migrations"
        }
    }
}