/*
 *  Bootstrap Nice Select Japanese (Japan) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const localisation = {
    locales: []
}

localisation.locales['ja-JP'] = localisation.locales['ja'] = {
    formatSearch() {
        return "検索中...";
    },
    formatHelpForTagging() {
        return "独自のタグを作成するには、入力フィールドにフォーカスし、「Enter」または「,」または「スペースバー」を押してリストに追加します。";
    }
}

export default localisation;