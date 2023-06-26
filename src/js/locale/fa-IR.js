/*
 *  Bootstrap Nice Select Persian (Iran) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['fa-IR'] = locales['fa'] = {
        formatSearch() {
            return "جستجو کردن...";
        },
        formatHelpForTagging() {
            return "برای ایجاد تگ های خود، روی فیلد ورودی تمرکز کنید و یکی از دکمه های زیر را برای ایجاد شیء کلیک کنید:";
        },
        formatInputToShort(remainingChars) {
            let message = 'لطفاً تعداد ' + remainingChars + ' کاراکتر یا بیشتر وارد نمایید';
            return message;
        }
    }
    DEFAULTS.locale = "fa-IR";
})(Constants.LOCALISATION);