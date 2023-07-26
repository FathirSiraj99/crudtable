const { PrismaClient } = require('@prisma/client')
const { use } = require('../Routes/ProductRoute')
const Prisma = new PrismaClient()
const users = Prisma.product

const getAll = async (req, res) => {
    try {
        const datas = await users.findMany()
        res.json(datas)
    } catch (error) {
        console.log(error)
    }
}


const createProduct = async(req, res) =>{
    try {
        const {nameProduct, price, expired, userId} = req.body
        await users.create({
            data: {
                nameProduct: nameProduct,
                price: price,
                expired: expired,
                userId: userId
            }
        });
        res.status(201).json({msg:"User Created"})
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

const updateUser = async (req, res) =>{
    try {
        console.log(req.body)
        const {id} = req.params
        const {nameProduct, price} = req.body
        await users.update({
            where: {
                id: id
            },
            data: {
                nameProduct: nameProduct,
                price: price,
            }
        });
       res.status(200).json({msg:"Update data"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAll,
    createProduct,
    deleteUser,
    getbyId,
    updateUser
}