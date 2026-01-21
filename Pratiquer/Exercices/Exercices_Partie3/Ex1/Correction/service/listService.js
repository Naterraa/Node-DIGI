const { List, Task } = require('../models/associations');

const listService = {
    getAllLists: async () => {
        return await List.findAll();
    },

    getListById: async (id) => {
        return await List.findByPk(id, { include: [{ model: Task, as: 'tasks' }] });
    },

    createList: async (data) => {
        return await List.create(data);
    }
};

module.exports = listService;
