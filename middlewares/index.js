
const validarJWT = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');
const validarArchivoSubir = require('../middlewares/validar-archivo')
const validaCampos= require('../middlewares/validar-campos');

//constantes que importan tood lo de estos archivos 

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles,
    ...validarArchivoSubir //destrucutrar tdodo lo que venga de este archivos como los metodos
}