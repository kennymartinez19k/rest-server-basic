const {Router} = require('express');
const { carsGet, carsPost, carsPut, carsDelete, carsPatch } = require('../controllers/cars');

const router = Router()

router.get('/', carsGet  )
router.post('/', carsPost)
router.put('/:id',  carsPut)
router.delete('/', carsDelete)
router.patch('/', carsPatch)



module.exports = router