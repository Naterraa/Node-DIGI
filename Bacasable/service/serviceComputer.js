listeComputer = [{
    id: 1,
    marque: "Asus",
    prix: 1000
},
{
    id: 2,
    marque: "Dell",
    prix: 1500
}]


const service = {
    getAll: () => {
        return listeComputer
    },
    create: (computer) => {
        // Aucune notion de validation = je pourrai ce que je veux dans mon create dans mon body et ça l'ajouterai 
        // à la liste
        // Plus tard on fera un middleware
        listeComputer.push(computer)
        return computer
    }
    // update getOne delete
}
module.exports = service