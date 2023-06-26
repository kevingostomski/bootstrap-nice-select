/*
 *  Bootstrap Nice Select English (United States) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['en-US'] = locales['en'] = {
        formatSearch() {
            return "Search...";
        },
        formatHelpForTagging() {
            return "To create your own tags, focus on the input field and click one of the following buttons to create the object:";
        },
        formatInputToShort(remainingChars) {
            return 'Please enter ' + remainingChars + ' or more characters';
        }
    }
    DEFAULTS.locale = "en-US";
})(Constants.LOCALISATION);