const { DataTypes } = require("sequelize");


module.exports = (sequelize, dataTypes) => {

    let alias = "UsuariosSeguros"
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        seguro_id: {
            type: dataTypes.INTEGER
        },
        fecha_contratacion: {
            type: dataTypes.DATE
        },
        fecha_vencimiento: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "usuarios_seguros",
        timestamps: false
    }

    const UsuariosSeguros = sequelize.define(alias, cols, config);

    UsuariosSeguros.associate = function(models){
        UsuariosSeguros.belongsTo(models.Seguro, {
         as: "seguro",
         foreignKey: "seguro_id"
     })

        UsuariosSeguros.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
    })

    UsuariosSeguros.belongsTo(models.Usuario, {
        as: "seguros",
        foreignKey: "usuario_id"
    })

    UsuariosSeguros.belongsTo(models.Usuario, {
    as: "usuarios",
    foreignKey: "usuario_id"    
    })
    
}
return UsuariosSeguros
}
