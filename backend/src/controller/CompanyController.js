
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { social_reason, fantasy_name, cnpj } = req.body;

        const [id] = await connection("companies").insert({
            social_reason_company: social_reason,
            fantasy_name_company: fantasy_name,
            cnpj_company: cnpj,
        });

        return res.json({ id });
    },
    async index(req, res) {
        const { page =  1 } = req.query;

        const [count] = await connection('companies').count();

        const companies = await connection('companies')
        .limit(15)
        .offset((page-1) * 5)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json(companies)
    },
    async delete(req, res) {
        const { company_id } = req.params;

        await connection('companies').where('id', company_id).delete();

        return res.status('204').send();
    }
};