/*
 *  Bootstrap Nice Select Portuguese (Portugal) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['pt-PT'] = locales['pt'] = {
        formatSearch() {
            return "Procurar...";
        },
        formatHelpForTagging() {
            return "Para criar suas próprias tags, concentre-se no campo de entrada e clique em um dos seguintes botões para criar o objeto:";
        },
        formatInputToShort(remainingChars) {
            return 'Introduza ' + remainingChars + ' ou mais caracteres';
        }
    }
    DEFAULTS.locale = "pt-PT";
})(Constants.LOCALISATION);