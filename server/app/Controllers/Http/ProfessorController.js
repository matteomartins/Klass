'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Professor = use('App/Models/Professor')
const Database = use('Database')

class ProfessorController {
  async create({request, response}){
    const {name, email, subjects} = request.all();
    const school_id = request.params.id_school;

    const {id} = await Professor.create({school_id, name, email})

    //registrar as matérias do professor
    subjects.map(async (value)=>{
      await Database.table('subject_professors').insert({professor_id: id, subject_id: value})
    })

    return response.status(201).send({ message: "Professor criado com sucesso" })
  }

  async index({request}){
    const professor_id = request.params.id_professor;
    const professor = await Professor.query().where('id', professor_id).fetch();
    const {name, email, titulation, priority} = professor.rows[0];

    //selecionar as matérias
    const allSubjects = await Database.table('subject_professors').where({professor_id});
    const subjects = allSubjects.map(({subject_id})=>{
      return subject_id
    })

    //selecionar os dias e horários
    const allDays = await Database.table('available_days').where({professor_id});

    const days = await Promise.all(allDays.map(async({id, day})=>{
      const allSchedules = await Database.table('available_schedules').where('available_days_id', id);
      const schedules = await Promise.all(allSchedules.map(({start, end})=>{
        return {start, end}
      }))
      return {day, schedules}
    }))

    return {name, email, subjects, titulation, priority, days}
  }

  async generalIndex({request}){
    const school_id = request.params.id_school;
    const listProfessors = await Professor.query().where({school_id}).fetch();

    let professors = []

    await Promise.all(listProfessors.rows.map(async ({id, name, email, titulation, priority})=>{
      //selecionar as matérias
      const allSubjects = await Database.table('subject_professors').where({professor_id: id});
      const subjects = allSubjects.map(({subject_id})=>{
        return subject_id
      })

      //selecionar os dias e horários
      const allDays = await Database.table('available_days').where({professor_id: id});

      const days = await Promise.all(allDays.map(async({id, day})=>{
        const allSchedules = await Database.table('available_schedules').where('available_days_id', id);
        const schedules = await Promise.all(allSchedules.map(({start, end})=>{
          return {start, end}
        }))
        return {day, schedules}
      }))

      professors.push({name, email, subjects, titulation, priority, days})
    }))

    return professors
  }

  async delete({request, response}){
    const idProfessor = request.params.id_professor;

    await Professor.query().where('id', idProfessor).delete();

    return response.status(200).send({ message: "Professor apagado com sucesso" })
  }

  async update({request, response}){
    const professor_id = request.params.id_professor;
    const {name, email, subjects} = request.all();

    //mudar as matérias
    const oldSubjects = await Database.table('subject_professors').where({professor_id});
    const subjectIDS = oldSubjects.map(({subject_id})=>{
      return subject_id
    })

    const addedSubjects = subjects.filter((value, index)=>{
      if(!subjectIDS.includes(value))
        return subjects[index]
    })

    addedSubjects.map(async (value)=>{
      await Database.table('subject_professors').insert({professor_id, subject_id: value})
    })

    subjects.map(async (value)=>{
      const comparedSubject = oldSubjects.find(({subject_id}) => subject_id === value);

      const index = oldSubjects.indexOf(comparedSubject);
      oldSubjects.splice(index,1);
    })

    oldSubjects.map(async({subject_id, professor_id})=>{
      await Database.table('subject_professors').where({subject_id, professor_id}).delete();
    })

    await Professor.query().where('id', professor_id).update({name, email});

    return response.status(200).send({ message: "Professor atualizado com sucesso" });
  }
}

module.exports = ProfessorController
