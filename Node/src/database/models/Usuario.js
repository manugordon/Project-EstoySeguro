

module.exports = (sequelize, dataTypes) =>{

    let alias =  "Usuario"
    let cols={
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.INTEGER
        },
        documento: {
            type: dataTypes.INTEGER
        },
        ciudad: {
            type: dataTypes.INTEGER
        },
        fecha_Nacimiento:{
            type: dataTypes.DATE
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

   Usuario.associate = function(models){
       Usuario.belongsToMany(models.Seguro,{
           as:'seguros',
           through:'usuarios_seguros',
           foreignKey: 'usuario_id',
           otherKey: 'seguro_id',
           timestamps: false
       })

        Usuario.belongsTo(models.Rol, {
        as: "rol",
        foreignKey: "rol_Id"
        })
    
        Usuario.hasMany(models.UsuariosSeguros, {
             as: "usuarios",
             foreignKey: "usuario_id"
        })

   }

    return Usuario
}

