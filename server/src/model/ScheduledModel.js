const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ScheduledSchema = new Schema({
    hospital: { type: String, required: true },
    id_hospital: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'OngModel', 
        require: true,
    },
    name: { type: String, required: true},
    rg: { type: String, required: true },
    cpf: { type: String, require: true, },
});

module.exports = mongoose.model('Schedules', ScheduledSchema);