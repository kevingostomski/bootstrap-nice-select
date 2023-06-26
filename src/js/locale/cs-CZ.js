/*
 *  Bootstrap Nice Select Czech (Czech Republic) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/


(function (locales) {
    locales['cs-CZ'] = locales['cs'] = {
        formatSearch() {
            return "Vyhledávání...";
        },
        formatHelpForTagging() {
            return "Chcete-li vytvořit vlastní značky, zaměřte se na vstupní pole a kliknutím na jedno z následujících tlačítek vytvořte objekt:";
        },
        formatInputToShort(remainingChars) {
            return 'Prosím, zadejte ještě dalších ' + remainingChars + ' znaků.';
        }
    }
    DEFAULTS.locale = "cs-CZ";
})(Constants.LOCALISATION);