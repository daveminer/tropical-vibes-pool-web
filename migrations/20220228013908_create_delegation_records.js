const { Table } = require("@chakra-ui/react");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

  // Holds a snapshot run per epoch
  await knex.schema.createTable('delegation_snapshots', function (table) {
    table.uuid('id')
      .primary('delegation_snapshot_id_primary_key', { constraintName: 'delegaton_snapshot_primary_key' })
      .defaultTo(knex.raw('uuid_generate_v4()'));

    table.integer('epoch').notNullable();

    table.timestamps({ defaultToNow: true });
  });

  // Record each wallet's delegation per epoch
  return await knex.schema.createTable('delegations', function (table) {
    table.uuid('id')
      .primary('delegations_id_primary_key', { constraintName: 'delegators_primary_key' })
      .defaultTo(knex.raw('uuid_generate_v4()'));

    table.uuid('snapshot_id').references('delegation_snapshots.id');
    table.string('stake_address').notNullable();
    table.bigInteger('live_stake').notNullable();

    table.timestamps({ defaultToNow: true });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.dropTable('delegations');
  knex.schema.dropTable('delegation_snapshots');
}