/*
 *  Bootstrap Nice Select Dutch (Netherlands) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['nl-NL'] = locales['nl'] = {
        formatSearch() {
            return "Zoekopdracht...";
        },
        formatHelpForTagging() {
            return "Om uw eigen tags te maken, focust u zich op het invoerveld en klikt u op een van de volgende knoppen om het object te maken:";
        },
        formatInputToShort(remainingChars) {
            return 'Gelieve ' + remainingChars + ' of meer karakters in te voeren';
        }
    }
    DEFAULTS.locale = "nl-NL";
})(Constants.LOCALISATION);