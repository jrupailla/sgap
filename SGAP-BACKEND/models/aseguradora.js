var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ESTADOS = require('../config/config').ESTADOS;
var ESTADO_ACTIVO = require('../config/config').ESTADO_ACTIVO;

var Schema = mongoose.Schema;

var aseguradoraSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre es requerido'], unique: true },
    prima_minima: { type: Number, required: [true, 'Monto mínimo es requerido'] },
    prima_max_gps: { type: Number, required: [true, 'Monto máximo GPS es requerido'] },
    tasa: { type: Number, required: [true, 'Tasa es requerida'] },
    aplica_vehicular: { type: boolean, required: [true, 'Indicar si aplica para vehicular']},
    orden: { type: number, required: [true, 'Indicar el orden de aparición']},
    estado: { type: Number, required: true, default: ESTADO_ACTIVO, enum: ESTADOS }
}, { collection: 'aseguradora' });

aseguradoraSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Aseguradora', aseguradoraSchema);