const { Schema, model } = require('mongoose');

const CamareroSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Puesto: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        
    },
    Edad: {
        type: String,
        required: true
    },
});



module.exports = model( 'Camarero', CamareroSchema );