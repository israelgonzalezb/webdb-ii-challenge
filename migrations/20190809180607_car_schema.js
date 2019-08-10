exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl
      .string("VIN", 17)
      .unique()
      .notNullable();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.int("Mileage").notNullable();
    tbl.string("TransType");
    tbl.string("TitleStatus");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
