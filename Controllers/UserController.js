const { PrismaClient } = require('@prisma/client')
const { use } = require('../Routes/UserRoute')
const Prisma = new PrismaClient()
const users = Prisma.users

const getAll = async (req, res) => {
    try {
        const datas = await users.findMany()
        res.json(datas)
    } catch (error) {
        console.log(error)
    }
}

const getbyId = async (req, res) => {
    try {
        const {id} = req.params
        const datas = await users.findUnique(
            {
                where: {
                    id: id
                }

            }
        )
        res.json(datas)
    } catch (error) {
        console.log(error)
    }
}

const createUser = async(req, res) =>{
    try {
        console.log(req.body.address)
        const {name, address} = req.body
        await users.create({
            data: {
                name: name,
                address: address,
            }
        });
        res.status(201).json({msg:"User Created"})
    } catch (error) {
        console.log(error)
    }
}


const updateUser = async (req, res) =>{
    try {
        console.log(req.body)
        const {id} = req.params
        const {name, address} = req.body
        await users.update({
            where: {
                id: id
            },
            data: {
                name: name,
                address: address
            }
        });
       res.status(200).json({msg:"Update data"})
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) =>{
    try {
        const {id} = req.params
        await users.delete({
            where:{
                id: id
            }
        })
        res.status(200).json({msg:"data was delete"})
    } catch (error) {
        
    }
}

module.exports = {
    getAll,
    getbyId,
    createUser,
    updateUser,
    deleteUser
    
}