const Task = require('./taskModel');
const List = require('./listModel');

// 1:N Relationship
List.hasMany(Task, {
    foreignKey: 'listId',
    as: 'tasks'
});

Task.belongsTo(List, {
    foreignKey: 'listId',
    as: 'list'
});

module.exports = { Task, List };
