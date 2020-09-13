'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QtdStudentsSchema extends Schema {
  up () {
    this.raw(`create function qtd_students (school varchar(25)) returns int
    reads sql data
    begin
        declare totalGroups int;
        declare thisGroup varchar(25);
        declare i int;
        declare studentsInGroups int;
        declare totalStudents int;
        set totalGroups = (select count(group_id) from school_groups where school_id = school);

        set i = 0;
        set totalStudents = 0;
        while i < totalGroups do
        select group_id into thisGroup from school_groups where school_id = school limit i,1;
            set studentsInGroups = (select count(group_id) from students where group_id = thisGroup);
            set totalStudents = totalStudents + studentsInGroups;
        set i = i + 1;
        end while;

        return totalStudents;
    end;`)
  }

  down () {
    this.raw('DROP FUNCTION IF EXISTS qtd_students')
  }
}

module.exports = QtdStudentsSchema
