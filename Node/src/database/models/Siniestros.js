module.exports = (sequelize, dataTypes) => {

    let alias = "Siniestros"
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        apellido: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.INTEGER
        },
        detalle: {
            type: dataTypes.STRING
        },
        lugar: {
            type: dataTypes.STRING
        },
        monto: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "siniestros",
        timestamps: false
    }

    const Siniestros = sequelize.define(alias, cols, config);


    return Siniestros
}