/*
 *  Bootstrap Nice Select Russian (Russia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['ru-RU'] = locales['ru'] = {
        formatSearch() {
            return "Поиск...";
        },
        formatHelpForTagging() {
            return "Чтобы создать собственные теги, сфокусируйтесь на поле ввода и нажмите одну из следующих кнопок, чтобы создать объект:";
        },
        formatInputToShort(remainingChars) {
            return 'Пожалуйста, введите ещё хотя бы ' + remainingChars + ' символ';
        }
    }
    DEFAULTS.locale = "ru-RU";
})(Constants.LOCALISATION);