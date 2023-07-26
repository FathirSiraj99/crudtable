const express = require('express')
const {
    getAll,
    createProduct,
    deleteUser,
    getbyId,
    updateUser
} = require('../Controllers/ProductController')

const router = express.Router()

router.get('/',getAll)
router.post('/',createProduct)
router.delete('/:id',deleteUser)
router.get('/:id',getbyId)
router.patch('/:id',updateUser)

module.exports = router