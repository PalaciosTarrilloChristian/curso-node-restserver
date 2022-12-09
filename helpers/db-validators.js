const { response } = require('express');
const Categoria = require('../models/categoria');
const Producto = require('../models/producto');
const Role = require('../models/roles');
const Usuario = require('../models/usuario') // entity > mongoose


const esRoleValido = async (rol= '') => { // valor por defecto si no viene 
    const existeRol = await Role.findOne({rol}); //buscar si existe el rol , retorna null si no lo halla 
    if(!existeRol){
        throw new Error(`El rol " ${rol}" no esta registrado`); // error personalizado para  que no rebiente
    }
}
//como estamos usacdando el chek y esta funcion com obiene en el vbbody asi de simple se pide 
const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo});

    if(existeEmail){
        throw new Error(`El correo: ${correo} ya esta registrado`); // error personalizado para  que no rebiente
    }
}



const  existeUsuarioPorId  = async(id) => {
    //aprendi a que puede saltar cualquier tpo de error 
    const existeUsuario = await Usuario.findById(id);

    if(!existeUsuario){
        throw new Error(`El id: ${id} ya esta registrado`); // error personalizado para  que no rebiente
    }
}


const existeCategoriaPorId = async(id) => {
    const existeCategoria = await Categoria.findById(id);

    if(!existeCategoria){
        throw new Error(`El id: ${id} no existe`)
    }
}

const existeProductoPorId = async(id) => {
    const existeProducto = await Producto.findById(id);
    if(!existeProducto){
        throw new Error(`El id: ${id} no existe`)

    }
}

module.exports ={
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}





