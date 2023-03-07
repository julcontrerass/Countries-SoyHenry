const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo y creo tablas
  sequelize.define('country', {
    id: {
      type: DataTypes.CHAR(3), //almacena datos de caracteres en un campo de longitud fija
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING, //una secuencia de caracteres
      allowNull: false
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
      allowNull:false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull:false
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },{
    timestamps: false
  });
};
