const { DataTypes } = require("sequelize");


module.exports = (sequelize, dataTypes) => {

    let alias = "Rol"
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "roles",
        timestamps: false
    }

    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = function(models) {
        Rol.hasMany(models.Usuario, {
             as: "roles",
             foreignKey: "rol_Id"
        })
    }

    return Rol
}
