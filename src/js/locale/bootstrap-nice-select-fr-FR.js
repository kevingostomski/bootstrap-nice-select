/*
 *  Bootstrap Nice Select French (France) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const localisation = {
    locales: []
}

localisation.locales['fr-FR'] = localisation.locales['fr'] = {
    formatSearch() {
        return "Recherche...";
    },
    formatHelpForTagging() {
        return "Pour créer vos propres balises, concentrez le champ de saisie, puis appuyez sur ',' pour l'ajouter à la liste";
    }
}

export default localisation;