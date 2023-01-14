import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Todo = db.define('todos',{
    name: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default Todo;
 
(async()=>{
    await db.sync();
})();