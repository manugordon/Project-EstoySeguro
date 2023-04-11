const { DataTypes } = require("sequelize");


module.exports = (sequelize, dataTypes) => {

    let alias = "Tipo"
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
        tableName: "tipos",
        timestamps: false
    }

    const Tipo = sequelize.define(alias, cols, config);

    Tipo.associate = function(models) {
        Tipo.hasMany(models.Seguro, {
             as: "tipos",
             foreignKey: "tipo_id"
        })
    }

    return Tipo
}
