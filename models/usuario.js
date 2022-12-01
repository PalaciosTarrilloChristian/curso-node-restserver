//coleccion = tabla  -> base de datos 
//creando modelo
const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    correo:{
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true
    },
    password:{
        type:String,
        required: [true, "La contraseña es obligatoria"]
    },
    img:{
        type:String,
    },
    rol:{
        type: String,
        required: [true, "El rol es obligatorio"],
        emun:["ADMIN_ROLE", "USER_ROLE"], //validara que el rol sera entre estos
    },
    estado:{
        type: Boolean,
        default: true, // por defacto activo
    },
    google:{
        type: Boolean,
        default: false
    }
});
//se exporta usando la funcion del modelo > emplea el squema y le seteara el nombre de la tabla (coleccion)


UsuarioSchema.methods.toJson = function(){ //! No funciona ->  cuanod se mande a llamar

    const {__v, password, ...usuario} = this.toObject();
    return usuario;
}
module.exports = model('Usuario', UsuarioSchema); //* automaticamente le pone en plural 