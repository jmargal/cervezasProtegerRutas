const express = require("express");

const router = express.Router();
const { upload,updateImage } = require("../controllers/uploadFile");
const { check } = require('express-validator')
const { validateFields } = require('../helpers/validate-fields')

router.post("/", upload);
router.put('/:collection/:id',
    [check('id','No es un id correcto').isMongoId(),
    check('collection').isIn(['users','cervezas']),
    validateFields],
updateImage);

module.exports=router
