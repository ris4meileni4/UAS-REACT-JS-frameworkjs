import {Sequelize} from "sequelize";
 
const db = new Sequelize('jadwal','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;