const express = require('express')
const {
    getAll,
    getbyId,
    createUser,
    updateUser,
    deleteUser
} = require('../Controllers/UserController')

const router = express.Router()

router.get('/',getAll)
router.get('/:id',getbyId)
router.post('/',createUser)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router;