const dbConfig = require("./knexfile.js");
const knex = require("knex");

export default function db() {
  const configByEnvironment = dbConfig[process.env.NODE_ENV || "development"];

  if (!configByEnvironment) {
    throw new Error(
      `Failed to get knex configuration for env:${process.env.NODE_ENV}`
    );
  }

  const db = knex(configByEnvironment);

  return db;
}