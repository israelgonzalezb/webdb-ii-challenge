// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./car-dealer.db3"
    },
    useNullAsDefault: true
  },
  migrations: {
    directory: "../migrations"
  }
};

/*
CREATE TABLE cars (
    VIN         STRING (17) NOT NULL
                            UNIQUE
                            PRIMARY KEY,
    Make        STRING      NOT NULL,
    Model       STRING      NOT NULL,
    Mileage     INTEGER     NOT NULL,
    TransType   STRING,
    TitleStatus STRING
);
*/