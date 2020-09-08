'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Database = use('Database');
const Turn = use('App/Models/Turn');

class DashboardController {
    async index({ request, response, auth }) {
        const user = await auth.getUser();
        const user_id = user.$attributes.id;

        const dashboard = [];

        const oldUserSchools = await Database.table('schools').innerJoin('administrators', 'schools.id', 'administrators.school_id').where('administrators.user_id', user_id)

        const turnsInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('turns', 'schools.id', 'turns.school_id')
            .where('administrators.user_id', user_id)

        const subjectInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('subjects', 'schools.id', 'subjects.school_id')
            .where('administrators.user_id', user_id)

        const groupInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('courses', 'schools.id', 'courses.school_id')
            .innerJoin('modules', 'courses.id', 'modules.course_id')
            .innerJoin('groups', 'modules.id', 'groups.module_id')
            .where('administrators.user_id', user_id)

        const professorInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('school_professors', 'schools.id', 'school_professors.school_id')
            .where('administrators.user_id', user_id)

        const reportsInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('reports', 'schools.id', 'reports.school_id')
            .where('administrators.user_id', user_id)

        const notificationsInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('notifications', 'schools.id', 'notifications.school_id')
            .where('administrators.user_id', user_id)

        const studentsInnerJoin = await Database.table('schools')
            .innerJoin('administrators', 'schools.id', 'administrators.school_id')
            .innerJoin('connections', 'schools.id', 'connections.school_id')
            .innerJoin('users', 'connections.user_id', 'users.id')
            .innerJoin('students', 'users.id', 'students.user_id')
            .where('administrators.user_id', user_id)

        oldUserSchools.map(({ name, school_id }) => {
            const turnFiltered = turnsInnerJoin.filter(function (turn) {
                return turn.school_id == school_id
            })
            const subjectFiltered = subjectInnerJoin.filter(function (subject) {
                return subject.school_id == school_id
            })
            const groupFiltered = groupInnerJoin.filter(function (group) {
                return group.school_id == school_id
            })
            const professorFiltered = professorInnerJoin.filter(function (professor) {
                return professor.school_id == school_id
            })
            const reportsFiltered = reportsInnerJoin.filter(function (reports) {
                return reports.school_id == school_id
            })
            const notificationsFiltered = notificationsInnerJoin.filter(function (notifications) {
                return notifications.school_id == school_id
            })
            const studentsFiltered = studentsInnerJoin.filter(function (students) {
                return students.school_id = school_id
            })

            const valores = {
                'school_name': name,
                'semanal_hours': 'Em desenvolvimento',
                'professors_number': professorFiltered.length,
                'classes_number': groupFiltered.length,
                'students_number': studentsFiltered.length,
                'subjects_number': subjectFiltered.length,
                'turns_number': turnFiltered.length,
                'notifications_number': notificationsFiltered.length,
                'reports_number': reportsFiltered.length
            }
            dashboard.push(valores)
        })

        return { dashboard }


    }
}

/* 
		"school_name": X
		"semanal_hours": 
		"professors_number": X
		"classes_number": X
		"students_number":
		"subjects_number": X
		"turns_number": X
		"notifications_number": X
		"reports_number": X
*/

module.exports = DashboardController
