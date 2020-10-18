'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolClassesSchema extends Schema {
  up () {
    this.raw(`CREATE VIEW school_classes AS
      select sc.id 'school_id', cl.id 'class_id' from schools sc
      inner join courses cs on cs.school_id = sc.id
      inner join modules md on md.course_id = cs.id
      inner join groups gp on gp.module_id = md.id
      inner join classes cl on cl.group_id = gp.id`);
  }

  down () {
    this.raw('DROP VIEW school_classes');
  }
}

module.exports = SchoolClassesSchema
