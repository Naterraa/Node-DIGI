const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");
const { listValidationRules, listIdValidationRules } = require("../validator/listValidator");
const validate = require("../validator/validate");

router.get("/", listController.getAllLists);
router.get("/:id", listIdValidationRules(), validate, listController.getListById);
router.post("/", listValidationRules(), validate, listController.createList);

module.exports = router;

