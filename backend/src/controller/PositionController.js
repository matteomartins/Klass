const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const {name} = req.body;
        let [id] = await connection('positions').insert({
            name
        });


        /*
        const {positions} = req.body;
        console.log(positions);
        const employees = await connection('employees').select(['employees.id','positions.name']).join('positions', {'employees.fk_position': 'positions.id'});
        console.log(employees);
        positions.map(async ({name, employees_id})=> {
            const match = employees.filter(e => e.name === name);
            if(match.length === 0) {
                let [id] = await connection('positions').insert({
                    name: name,
                    start_date: new Date().toISOString().split('T')[0],
                    stop_date: new Date('01/01/9999').toISOString().split('T')[0]
                })

                employees_id.map(async employee_id =>{
                    await connection('employees').where('id', employee_id).update({
                        fk_position: id
                    })
                })
            }
            else {
                employees_id.map(employee_id=>{
                    const match_ids = match.filter(e => e.id === employee_id);
                    console.log(match_ids);
                    if(match_ids.length === 0) {
                        console.log('Erro')
                    }
                    else {
                        console.log('YEY')
                    }
                })

            }
        })
        /*
        employees.map(({id, name})=>{
            const match = positions.find(p => p.name === name);
            if(typeof(match) !== 'undefined') {
                console.log(match.employees_id.indexOf(id));
                if(match.employees_id.indexOf(id) !== -1){
                    console.log('bateu')
                }
            }

        })

        /*
        const oldPositions = await connection('employees').select('*').join('positions', {'employees.fk_position': 'positions.id'});
        if(oldPositions.length === 0) {
            positions.map(async ({name, employees_id})=>{
                let [id] = await connection('positions').insert({
                    name,
                    start_date: new Date().toISOString().split('T')[0],
                    stop_date: new Date('01/01/9999').toISOString().split('T')[0]
                })
                employees_id.map(async employee_id =>{
                    await connection('employees').where('id', employee_id).update({
                        fk_position: id
                    })
                })
            })
        }
        else {
            positions.map(async ({name, employees_id})=>{
                const names = await connection('positions').select('name');
                let old_name = name;
                
                names.map(async ({name})=> {
                    if(name=== old_name) {
                        const id_name_position = names[positions.indexOf(old_name)];
                        console.log(id_name_position); 
                        const employees = await connection('employees').select('positions.name').where({'positions.id': id_name_position}).join('positions', {'employees.fk_position': 'positions.id'});
                        employees.map(({name})=>{
                            if(name !== old_name) {
                                console.log('Algo mudou')
                            }
                            else {
                                console.log('Nada mudou')
                            }
                        })

                    }
                    else {



                    }
                })
            })
        }
        const [id] = await connection('employees').insert({
            name_employee: name,
            cpf_employee: cpf,
            phone_employee: phone,
            base_salary,
            fk_company: id_company
        })
    */
        return res.json(id);
    },
    async index(req,res) {
        const newPositions = await connection('positions').select('*');

        return res.json(newPositions);
    },
    async delete(req, res) {
        const {id} = req.body;
        await connection('positions').where({'id':id}).delete();
        return res.status('204').send();
    }
    
}