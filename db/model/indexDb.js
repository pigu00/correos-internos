const {mensajes} = require ('./mensajes')
const {usuarios} = require ('./usuarios')

usuarios.hasMany(mensajes,{foreignKey: "usuarioid"})
usuarios.hasMany(mensajes,{foreignKey: "destinoMensaje"})

module.exports={
    mensajes, 
    usuarios
}