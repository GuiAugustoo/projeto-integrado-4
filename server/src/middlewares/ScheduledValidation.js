const ScheduledModel = require('../model/ScheduledModel');

const ScheduledValidation = async (req, res, next) => {

    const { hospital, id_hospital, name, rg, cpf } = req.body;

    if (!hospital) {
        return res.status(400).json({ error: 'Hospital é obrigatório' });

    } else if (!id_hospital) {
        return res.status(400).json({ error: 'ID Hospital é obrigatório' });

    } else if (!name) {
        return res.status(400).json({ error: 'Nome é obrigatório' });

    } else if (!rg) {
        return res.status(400).json({ error: 'RG é obrigatório' });

    } else if (!cpf) {
        return res.status(400).json({ error: 'CPF é obrigatório' });

    } else {
        next();

    }
}

module.exports = ScheduledValidation;