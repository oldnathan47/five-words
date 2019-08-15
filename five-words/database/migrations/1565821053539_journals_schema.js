"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class JournalsSchema extends Schema {
  up() {
    this.create("journals", table => {
      table.increments();
      table.integer("user_id");
      table.string("reflection");
      table.string("question");
      table.timestamps();
    });
  }

  down() {
    this.drop("journals");
  }
}

module.exports = JournalsSchema;
