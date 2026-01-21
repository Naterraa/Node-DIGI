const { body, param } = require('express-validator');

const taskValidationRules = () => {
    return [
        body('titre')
            .notEmpty().withMessage('Le titre est obligatoire')
            .isString().withMessage('Le titre doit être une chaîne de caractères')
            .isLength({ min: 3 }).withMessage('Le titre doit faire au moins 3 caractères'),

        body('description')
            .optional()
            .isString().withMessage('La description doit être une chaîne de caractères'),

        body('date_debut')
            .optional()
            .isISO8601().withMessage('La date de début doit être une date valide (ISO8601)'),

        body('date_fin')
            .optional()
            .isISO8601().withMessage('La date de fin doit être une date valide (ISO8601)')
            .custom((value, { req }) => {
                if (value && req.body.date_debut && new Date(value) <= new Date(req.body.date_debut)) {
                    throw new Error('La date de fin doit être après la date de début');
                }
                return true;
            }),

        body('done')
            .optional()
            .isBoolean().withMessage('Le champ done doit être un booléen'),
    ];
};

const taskIdValidationRules = () => {
    return [
        param('id').isInt().withMessage("L'ID doit être un nombre entier"),
    ];
};

module.exports = {
    taskValidationRules,
    taskIdValidationRules,
};
