const {mensajes} = require ('./mensajes')
const {usuarios} = require ('./usuarios')

usuarios.hasMany(mensajes,{foreignKey: "usuarioid"})


module.exports={
    mensajes, 
    usuarios
}