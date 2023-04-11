

module.exports = (sequelize, dataTypes) => {

    let alias = "Seguro"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        icono: {
            type: dataTypes.STRING
        },
        tipo_id: {
            type: dataTypes.INTEGER
        },
        categoria_Id: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "seguros",
        timestamps: false
    }

    const Seguro = sequelize.define(alias, cols, config);

    Seguro.associate = function (models) {
            Seguro.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        }),

            Seguro.belongsTo(models.Tipo, {
                as: "tipo",
                foreignKey: "tipo_id"
            })

            Seguro.belongsToMany(models.Usuario, {
            as: 'usuarios',
            through: 'usuarios_seguros',
            foreignKey: 'seguro_id',
            otherKey: 'usuario_id',
            timestamps: false
        })

            Seguro.hasMany(models.UsuariosSeguros, {
            as: "seguros",
            foreignKey: "seguro_id"
       })
    }

    return Seguro
}

