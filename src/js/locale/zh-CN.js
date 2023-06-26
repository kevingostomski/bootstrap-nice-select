/*
 *  Bootstrap Nice Select Chinese (Simplified, People's Republic of China) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['zh-CN'] = locales['zh'] = {
        formatSearch() {
            return "搜索...";
        },
        formatHelpForTagging() {
            return "要创建您自己的标签，请关注输入字段并单击以下按钮之一来创建对象：";
        },
        formatInputToShort(remainingChars) {
            return '请再输入至少' + remainingChars + '个字符';
        }
    }
    DEFAULTS.locale = "zh-CN";
})(Constants.LOCALISATION);