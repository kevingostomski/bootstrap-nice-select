/*
 *  Bootstrap Nice Select Catalan (Spain) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['ca-ES'] = locales['ca'] = {
        formatSearch() {
            return "Cerca...";
        },
        formatHelpForTagging() {
            return "Per crear les vostres pròpies etiquetes, centreu-vos en el camp d'entrada i feu clic en un dels botons següents per crear l'objecte:";
        },
        formatInputToShort(remainingChars) {
            let message = 'Si us plau, introdueix ' + remainingChars + ' car';
            if (remainingChars == 1) {
                message += 'àcter';
            } else {
                message += 'àcters';
            }
            return message;
        }
    }
    DEFAULTS.locale = "ca-ES";
})(Constants.LOCALISATION);