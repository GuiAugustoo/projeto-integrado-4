const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const OngSchema = new Schema({
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    cnpj: { type: String, required: true},
    whatsapp: { type: String, required: true },
    biografia: { type: String, require: true, },
    tipo: { type: String, required: true },
    orientacao: { type: String, required: true },
    tipo_logradouro: { type: String, required: true}, 
    logradouro: { type: String, required: true }, 
    numero: { type: Number, required: true }, 
    complemento: { type: String, required: false }, 
    bairro: { type: String, required: true }, 
    cidade: { type: String, required: true }, 
    dia: { type: String, required: true}
});

module.exports = mongoose.model('Ongs', OngSchema);