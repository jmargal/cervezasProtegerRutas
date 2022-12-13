const express = require("express");
const router = express.Router();

const { check } = require('express-validator')
const{validateJWT}=require('../middlewares/validate-jwt')
const {
  getWaiters,
  getWaiter,
  addWaiter,
  deleteWaiter,
  editwaiter,
} = require("../controllers/camareros");
const { validateFields } = require("../helpers/validate-fields");
const { hasRol,isAdminRol} = require("../middlewares/validate-rol");

router.get("/", getWaiters);
router.get("/:id", getWaiter);
router.post("/",[
    validateJWT,
    check('Nombre','Name is mandatory').not().isEmpty(),
    check('Puesto','Puesto is mandatory').not().isEmpty(),
    hasRol("ADMIN_ROLE","SELL_ROLE"), //Si ha pasado el validate del token tiene un usuario en la cabecera asi que puedo pasarle este
  validateFields],
  addWaiter
);
router.delete("/:id", deleteWaiter);
router.put("/:id",[
    validateJWT,
    check('Nombre','Name is mandatory').not().isEmpty(),
    check('Puesto','Puesto is mandatory').not().isEmpty(),
    check('Edad','Edad is mandatory').not().isEmpty(),
  validateFields],
  editwaiter);

module.exports = router;
