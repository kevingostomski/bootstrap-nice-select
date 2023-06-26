/*
 *  Bootstrap Nice Select Estonian (Estonia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['et-EE'] = locales['et'] = {
        formatSearch() {
            return "Otsing...";
        },
        formatHelpForTagging() {
            return "Oma siltide loomiseks keskenduge sisestusväljale ja klõpsake objekti loomiseks ühte järgmistest nuppudest:";
        },
        formatInputToShort(remainingChars) {
            let message = 'Sisesta ' + remainingChars + ' täht';
            if (remainingChars != 1) {
                message += 'e';
            }
            message += ' rohkem';
            return message;
        }
    }
    DEFAULTS.locale = "et-EE";
})(Constants.LOCALISATION);