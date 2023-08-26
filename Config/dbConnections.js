
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('abhis', 'root', '9899803387Ak@',{
        host: 'localhost',
        dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Connected')
})
    .catch(err => {
        console.log("error" + err)
    })

module.exports = sequelize;