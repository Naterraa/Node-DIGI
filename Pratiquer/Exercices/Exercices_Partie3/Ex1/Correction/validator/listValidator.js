const { body, param } = require('express-validator');

const listValidationRules = () => {
    return [
        body('nom')
            .notEmpty().withMessage('Le nom est obligatoire')
            .isString().withMessage('Le nom doit être une chaîne de caractères')
            .isLength({ min: 2 }).withMessage('Le nom doit faire au moins 2 caractères'),

        body('description')
            .optional()
            .isString().withMessage('La description doit être une chaîne de caractères'),
    ];
};

const listIdValidationRules = () => {
    return [
        param('id').isInt().withMessage("L'ID doit être un nombre entier"),
    ];
};

module.exports = {
    listValidationRules,
    listIdValidationRules,
};
