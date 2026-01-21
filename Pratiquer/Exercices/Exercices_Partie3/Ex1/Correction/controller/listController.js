const listService = require("../service/listService");

const listController = {
    getAllLists: async (req, res) => {
        try {
            const lists = await listService.getAllLists();
            res.json(lists);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getListById: async (req, res) => {
        try {
            const list = await listService.getListById(req.params.id);
            if (list) {
                res.json(list);
            } else {
                res.status(404).json({ message: "List not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createList: async (req, res) => {
        try {
            if (!req.body.nom) {
                return res.status(400).json({ message: "Name (nom) is required" });
            }
            const newList = await listService.createList(req.body);
            res.status(201).json(newList);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = listController;
