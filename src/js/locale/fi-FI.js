/*
 *  Bootstrap Nice Select Finnish (Finland) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['fi-FI'] = locales['fi'] = {
        formatSearch() {
            return "Hae...";
        },
        formatHelpForTagging() {
            return "Jos haluat luoda omia tunnisteita, keskity syöttökenttään ja luo objekti napsauttamalla jotakin seuraavista painikkeista:";
        },
        formatInputToShort(remainingChars) {
            return 'Ole hyvä ja anna ' + remainingChars + ' merkkiä lisää';
        }
    }
    DEFAULTS.locale = "fi-FI";
})(Constants.LOCALISATION);