/*
 *  Bootstrap Nice Select German (Germany) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['de-DE'] = locales['de'] = {
        formatSearch() {
            return "Suchen...";
        },
        formatHelpForTagging() {
            return "Um eigene Tags zu erstellen, fokussieren Sie das Eingabefeld und klicken Sie einen der folgenden Tasten um das Objekt zu erstellen:";
        },
        formatInputToShort(remainingChars) {
            return 'Bitte ' + remainingChars + ' Zeichen mehr eingeben';
        }
    }
    DEFAULTS.locale = "de-DE";
})(Constants.LOCALISATION);