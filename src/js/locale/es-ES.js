/*
 *  Bootstrap Nice Select Spanish (Spain, International Sort) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['es-ES'] = locales['es'] = {
        formatSearch() {
            return "Buscar...";
        },
        formatHelpForTagging() {
            return "Para crear sus propias etiquetas, céntrese en el campo de entrada y haga clic en uno de los siguientes botones para crear el objeto:";
        },
        formatInputToShort(remainingChars) {
            let message = 'Por favor, introduzca ' + remainingChars + ' car';
            if (remainingChars == 1) {
                message += 'ácter';
            } else {
                message += 'acteres';
            }
            return message;
        }
    }
    DEFAULTS.locale = "es-ES";
})(Constants.LOCALISATION);