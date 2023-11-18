/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("n", (table) => {
    table.increments("id").primary();
    table.string("impact_condition").notNullable();
    table.string("event_begin_date").notNullable();
    table.string("number_of_affected_users").notNullable();
    table.string("management_group").notNullable();
    table.string("reporter_name").notNullable();
    table.string("reporter_position").notNullable();
    table.string("reporter_phone").notNullable();
    table.string("reporter_email").notNullable();
    table.string("impact_description").notNullable();
    table.string("affected_services").notNullable();
    table.string("incidents_log").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("incidents");
};
