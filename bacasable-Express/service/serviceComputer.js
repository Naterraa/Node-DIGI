const Computer = require('../models/computerModel');

const service = {
    getAll: async () => {
        return await Computer.findAll();
    },
    create: async (computerData) => {
        return await Computer.create(computerData);
    }
};

module.exports = service;