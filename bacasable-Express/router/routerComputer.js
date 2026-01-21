const express = require("express");
const router = express.Router();
const controller = require("../controller/controllerComputer");
const { computerValidator, idComputerValidator } = require("../validator/computerValidator");
const validate = require("../validator/validate");
const authMiddleware = require("../middleware/authMiddleware");

router.get('/', authMiddleware, controller.getAll);

router.get('/:id', idComputerValidator, validate, controller.getById);
router.post('/', computerValidator, validate, controller.create);
router.put('/:id', idComputerValidator, computerValidator, validate, controller.update);

module.exports = router;
