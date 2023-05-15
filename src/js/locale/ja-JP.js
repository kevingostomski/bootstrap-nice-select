/*
 *  Bootstrap Nice Select Japanese (Japan) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['ja-JP'] = locales['ja'] = {
        formatSearch() {
            return "検索...";
        },
        formatHelpForTagging() {
            return "独自のタグを作成するには、入力フィールドに焦点を当て、次のいずれかのボタンをクリックしてオブジェクトを作成します。";
        }
    }
    DEFAULTS.locale = "ja-JP";
})(Constants.LOCALISATION);