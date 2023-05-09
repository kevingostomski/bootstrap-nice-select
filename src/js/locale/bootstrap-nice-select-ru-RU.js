/*
 *  Bootstrap Nice Select Russian (Russia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const localisation = {
    locales: []
}

localisation.locales['ru-RU'] = localisation.locales['ru'] = {
    formatSearch() {
        return "Идет поиск...";
    },
    formatHelpForTagging() {
        return "Для создания собственных тегов сфокусируйте поле ввода, a затем нажмите ',', чтобы добавить ero в список.";
    }
}

export default localisation;