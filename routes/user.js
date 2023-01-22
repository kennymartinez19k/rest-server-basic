const {Router} = require('express');
const { usersGet, usersPost, userPut, usersDelete, usersPatch } = require('../controllers/user');

const router = Router()

router.get('/', usersGet)
router.post('/', usersPost )
router.put('/', userPut)
router.delete('/', usersDelete)
router.delete('/', usersPatch)


module.exports = router