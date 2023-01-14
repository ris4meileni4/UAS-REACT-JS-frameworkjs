import jadwal from "../models/JadwalModel.js";
 
export const getTodos = async(req, res) =>{
    try {
        const response = await jadwal.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getjadwalById = async(req, res) =>{
    try {
        const response = await jadwal.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createjadwal = async(req, res) =>{
    try {
        await jadwal.create(req.body);
        res.status(201).json({msg: "jadwal Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatejadwal = async(req, res) =>{
    try {
        await jadwal.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "jadwal Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletejadwal = async(req, res) =>{
    try {
        await Todo.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "jadwal Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
 