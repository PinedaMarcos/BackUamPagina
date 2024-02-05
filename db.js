const { Sequelize } = require('sequelize');

const datosModel = require('./models/datos')



    const sequelize = new Sequelize('railway', 'root', 'dG-hCGfgb-DBA6FC3B-gg53F2fBfHA4B', {
       host: 'viaduct.proxy.rlwy.net',
       port: '57517',
      dialect: 'mysql' ,
      define: { 
          timestamps: false
      }
    })

  const Datos = datosModel(sequelize, Sequelize);
  

  sequelize.sync({force: false})
  .then(()=>{
      console.log("tablas sincronizadas")
  })

 
  module.exports ={
      Datos
  }