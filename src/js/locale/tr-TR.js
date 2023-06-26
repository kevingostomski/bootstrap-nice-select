/*
 *  Bootstrap Nice Select Turkish (Turkey) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['tr-TR'] = locales['tr'] = {
        formatSearch() {
            return "Aramak...";
        },
        formatHelpForTagging() {
            return "Kendi etiketlerinizi oluşturmak için giriş alanına odaklanın ve nesneyi oluşturmak için aşağıdaki düğmelerden birine tıklayın:";
        },
        formatInputToShort(remainingChars) {
            return 'En az ' + remainingChars + ' karakter daha girmelisiniz';
        }
    }
    DEFAULTS.locale = "tr-TR";
})(Constants.LOCALISATION);