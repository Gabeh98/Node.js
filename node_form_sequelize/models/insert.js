const db = require('./_database')
const insert = db.sequelize.define('usuarios',{
    nome:{
        type:db.Sequelize.STRING
    }
});
//insert.sync({force:true})
module.exports = insert