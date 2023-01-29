const {Router} = require('express');
const { usersGet, usersPost, userPut, usersDelete, usersPatch } = require('../controllers/user');
const {check} = require('express-validator');
const { validate } = require('../middlewares/validate');
const {emailValidate, phoneValidate} = require('../helpers/validation');
const router = Router()

router.get('/', usersGet)
router.post('/', [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "La contraseña debe tener mas de 6 caracteres").isLength({min: 6}),
    check("number", "El numero es obligatorio").not().isEmpty(),
    check("rol", "El rol debe ser uno valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("email", "El correo no es valido").isEmail(),
    check("number").custom(phoneValidate),
    check('email').custom(emailValidate),
    validate
] , usersPost )
router.put('/', [
    check("id", "Es un id invalido").isMongoId(),
    validate
],


userPut)
router.delete('/', [
    check("id", "Es un id invalido").isMongoId(),
    validate

], usersDelete)


module.exports = router