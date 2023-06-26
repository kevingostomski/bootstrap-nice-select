/*
 *  Bootstrap Nice Select Polish (Poland) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['pl-PL'] = locales['pl'] = {
        formatSearch() {
            return "Szukaj...";
        },
        formatHelpForTagging() {
            return "Aby utworzyć własne tagi, skup się na polu wejściowym i kliknij jeden z poniższych przycisków, aby utworzyć obiekt:";
        },
        formatInputToShort(remainingChars) {
            let charsWords = ['znak', 'znaki', 'znaków'];
            let pluralWord = function (numberOfChars, words) {
                if (numberOfChars === 1) {
                    return words[0];
                } else if (numberOfChars > 1 && numberOfChars <= 4) {
                    return words[1];
                } else if (numberOfChars >= 5) {
                    return words[2];
                }
            };
            return 'Podaj przynajmniej ' + remainingChars + ' ' +
                pluralWord(remainingChars, charsWords);
        }
    }
    DEFAULTS.locale = "pl-PL";
})(Constants.LOCALISATION);