/*
 *  Bootstrap Nice Select Bulgarian (Bulgaria) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['bg-BG'] = locales['bg'] = {
        formatSearch() {
            return "Търсене...";
        },
        formatHelpForTagging() {
            return "За да създадете свои собствени тагове, фокусирайте се върху полето за въвеждане и щракнете върху един от следните бутони, за да създадете обекта:";
        },
        formatInputToShort(remainingChars) {
            let message = 'Моля въведете още ' + remainingChars + ' символ';
            if (remainingChars > 1) {
                message += 'a';
            }
            return message;
        }
    }
    DEFAULTS.locale = "bg-BG";
})(Constants.LOCALISATION);