import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Jadwal = db.define('jadwal',{
    name: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default jadwal;
 
(async()=>{
    await db.sync();
})();