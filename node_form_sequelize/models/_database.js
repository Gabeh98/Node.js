const Sequelize = require("sequelize")
const sequelize = new Sequelize({
    host: 'localhost',
    database: 'test',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres',
    port: 5432,
    logging: false
});
module.exports = {
    sequelize:sequelize,
    Sequelize:Sequelize
}