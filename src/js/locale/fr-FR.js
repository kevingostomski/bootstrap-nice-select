/*
 *  Bootstrap Nice Select French (France) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['fr-FR'] = locales['fr'] = {
        formatSearch() {
            return "Recherche...";
        },
        formatHelpForTagging() {
            return "Pour créer vos propres balises, concentrez-vous sur le champ de saisie et cliquez sur l'un des boutons suivants pour créer l'objet:";
        },
        formatInputToShort(remainingChars) {
            return 'Saisissez au moins ' + remainingChars + ' caractère' + ((remainingChars > 1) ? 's' : '');
        }
    }
    DEFAULTS.locale = "fr-FR";
})(Constants.LOCALISATION);