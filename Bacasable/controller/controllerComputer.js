const service = require("../service/serviceComputer")

const controller = {
    // Gérer le retour (send...) et une gestion d'erreur (le statut etc)
    // appeler le service qui lui va s'occuper de la logique métier => aller chercher la liste des tâches pour le getAll
    getAll: (req, res) => {
        try {
            const listeComputer = service.getAll()
            res.send(listeComputer)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    create: (req, res) => {
        try {
            const computer = service.create(req.body)
            res.send(computer)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}
module.exports = controller;