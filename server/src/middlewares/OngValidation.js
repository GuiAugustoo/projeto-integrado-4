const OngModel = require('../model/OngModel');

const OngValidation = async (req, res, next) => {

    const { name, avatar, cnpj, whatsapp, biografia, tipo, orientacao, tipo_logradouro, logradouro, numero, complemento, bairro, cidade } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'name é obrigatório' });

    } else if (!avatar) {
        return res.status(400).json({ error: 'Avatar é obrigatório' });

    } else if (!cnpj) {
        return res.status(400).json({ error: 'CNPJ é obrigatório' });

    }else if (!whatsapp) {
        return res.status(400).json({ error: 'WhatsApp é obrigatório' });

    }else if (!biografia) {
        return res.status(400).json({ error: 'Biografia é obrigatório' });

    }else if (!tipo) {
        return res.status(400).json({ error: 'Tipo é obrigatório' });

    }else if (!orientacao) {
        return res.status(400).json({ error: 'Orientação é obrigatório' });

    }
    else if (!tipo_logradouro) {
        return res.status(400).json({ error: 'Tipo de logradouro é obrigatório' });

    }
    else if (!logradouro) {
        return res.status(400).json({ error: 'Logradouro é obrigatório' });

    }
    else if (!numero) {
        return res.status(400).json({ error: 'Número é obrigatório' });

    }
    else if (!bairro) {
        return res.status(400).json({ error: 'Bairro é obrigatório' });

    }else if (!cidade) {
        return res.status(400).json({ error: 'Cidade é obrigatório' });

    }else {

        let exists;

        exists = await OngModel.
            findOne(
                {
                    'cnpj': { '$eq': cnpj }
                });

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma empresa cadastrada com este CNPJ!' });
        }
        next();
    }
}

module.exports = OngValidation;