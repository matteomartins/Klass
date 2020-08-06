const connection = require('../database/connection');

module.exports = {
    async create(req, res) {

        const {positions} = req.body;
        const employees = await connection('employees')
        .select([{employee_id: 'employees.id'},{position_id: 'positions.id'}])
        .join('positionEmployee', {'positionEmployee.fk_employee': 'employees.id'})
        .join('positions', {'positionEmployee.fk_position': 'positions.id'});

        positions.map(({position_id, employees_ids})=> {
            employees_ids.map(async employee_id=>{
                const match_ids = employees.filter(e => e.employee_id === employee_id);
                if(match_ids.length === 0) {
                    let [id] = await connection('positionEmployee').insert({
                        initial_date: new Date().toISOString().split('T')[0],
                        final_date: new Date('01/01/9999').toISOString().split('T')[0],
                        fk_position: position_id,
                        fk_employee: employee_id
                    })
                }
            })
        })

        return res.status('204').send();
    },
    async index(req,res) {
        const employees = await connection('employees')
        .select([{employee_id: 'employees.id'},{name_employee: 'employees.name_employee'}, {name_position: 'positions.name'} ,{position_id: 'positions.id'}])
        .join('positionEmployee', {'positionEmployee.fk_employee': 'employees.id'})
        .join('positions', {'positionEmployee.fk_position': 'positions.id'});

        return res.json(employees);
    },
    async delete(req, res) {
        const {id} = req.body;
        await connection('positions').where({'id':id}).delete();
        return res.status('204').send();
    }
    
}