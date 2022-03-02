const { Table } = require("@chakra-ui/react");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

  return knex.schema.createTable('daily_delegations', function (table) {
    table.uuid('id')
      .primary('id_primary_key', { constraintName: 'delegators_primary_key' })
      .defaultTo(knex.raw('uuid_generate_v4()'));

    table.string('stake_address').notNullable();
    table.bigInteger('live_stake').notNullable();
    table.date('date_credited').notNullable();

    table.timestamps({ defaultToNow: true });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('delegators');
