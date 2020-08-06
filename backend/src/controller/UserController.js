const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const {name, cpf, phone, base_salary, id_company} = req.body;
    
        const [id] = await connection('employees').insert({
            name_employee: name,
            cpf_employee: cpf,
            phone_employee: phone,
            base_salary,
            fk_company: id_company
        })
    
        return res.json({ id });
    },
    async index(req,res) {
        const employees = await connection('employees').select('*');
    
        return res.json(employees);
    },
    async delete(req, res) {
        const { id } = req.params;

        await connection('employees').where('id', id).delete();

        return res.status('204').send();
    }
}