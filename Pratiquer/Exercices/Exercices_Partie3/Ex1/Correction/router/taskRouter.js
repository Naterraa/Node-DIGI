const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const { taskValidationRules, taskIdValidationRules } = require("../validator/taskValidator");
const validate = require("../validator/validate");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskIdValidationRules(), validate, taskController.getTaskById);
router.post("/", taskValidationRules(), validate, taskController.createTask);
router.put("/:id", taskIdValidationRules(), taskValidationRules(), validate, taskController.updateTask);
router.delete("/:id", taskIdValidationRules(), validate, taskController.deleteTask);

module.exports = router;

