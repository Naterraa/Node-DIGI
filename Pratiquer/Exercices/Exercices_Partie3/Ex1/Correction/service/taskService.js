const { Task, List } = require('../models/associations');

const taskService = {
    getAllTasks: async () => {
        return await Task.findAll({
            include: [{
                model: List,
                as: 'list'
            }]
        });
    },

    getTaskById: async (id) => {
        return await Task.findByPk(id, {
            include: [{
                model: List,
                as: 'list'
            }]
        });
    },


    createTask: async (data) => {
        return await Task.create(data);
    },

    updateTask: async (id, data) => {
        const task = await Task.findByPk(id);
        if (task) {
            return await task.update(data);
        }
        return null;
    },

    deleteTask: async (id) => {
        const task = await Task.findByPk(id);
        if (task) {
            await task.destroy();
            return task;
        }
        return null;
    }
};

module.exports = taskService;
