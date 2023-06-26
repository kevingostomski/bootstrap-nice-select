/*
 *  Bootstrap Nice Select Italian (Italy) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['it-IT'] = locales['it'] = {
        formatSearch() {
            return "Ricerca...";
        },
        formatHelpForTagging() {
            return "Per creare i tuoi tag, concentrati sul campo di input e fai clic su uno dei seguenti pulsanti per creare l'oggetto:";
        },
        formatInputToShort(remainingChars) {
            return 'Per favore inserisci ' + remainingChars + ' o più caratteri';
        }
    }
    DEFAULTS.locale = "it-IT";
})(Constants.LOCALISATION);