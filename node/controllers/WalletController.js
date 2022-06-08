import WalletModel from "../models/WalletModel.js";
var showN = 99999999
//CRUD Methods

//READ all Ops
export const getAllOperations = async (req, res) => {
    showN = 9999999
    try{
        const operations = await WalletModel.findAll({
            order: [['id', 'DESC']]
        })
        res.json(operations)
    } catch (error) {
        res.json({message: error.message})
    }
}
//CREATE 
export const createOperation = async (req, res) => {
    try {
        await WalletModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error){
        res.json({message: error.message})
    }
}
//UPDATE
export const updateOperation = async (req, res) =>{
    try {
        await WalletModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error){
        res.json({message: error.message})
    }
}
//DELETE
export const deleteOperation = async (req, res) => {
    try {
        await WalletModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error){
        res.json({message: error.message})
    }
}
//Show last 10 ops
export const getLast10Operations = async (req, res) => {
    try {
        showN=10
        const operations = await WalletModel.findAll({
            limit: showN,
            order: [['id', 'DESC']]
        })
        res.json(operations)
    } catch (error) {
        res.json({message:error.message})
    }
}
//show expenses only
export const getOperationsWhereExpense = async (req, res) => {
    try {
        const operations = await WalletModel.findAll({
            where:{type:'expense'}
        })
        res.json(operations)
    } catch (error) {
        res.json({message: error.message})
    }
}
// get an operation data
export const getOperation = async (req, res) => {
    try{
        const operation = await WalletModel.findAll({
            where:{id:req.params.id}
        })
        res.json(operation[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
// Order by category
export const getByCategory = async (req, res) => {
    try{
        const operations = await WalletModel.findAll({
            
            limit: showN,
            order: [['category', 'ASC']]
        })
        res.json(operations)
    } catch (error) {
        res.json({message: error.message})
    }
}