const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete,usuariosPatch } = require('../controllers/usuarios');

/**
 * ruteo los endpoints
 */

const router = Router();

router.get('/',usuariosGet);

// Se declara : y el nombre del parametro que necesitas recibir
router.put('/:id',usuariosPut);

router.post('/',usuariosPost);

router.delete('/',usuariosDelete);

router.patch('/',usuariosPatch);

module.exports = router;