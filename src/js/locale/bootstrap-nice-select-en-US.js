/*
 *  Bootstrap Nice Select English Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const localisation = {
    locales: []
}

localisation.locales['en-US'] = localisation.locales['en'] = {
    formatSearch() {
        return "Search...";
    },
    formatHelpForTagging() {
        return "For creating own tags, focus the input field and then press 'Enter' or ',' or 'Spacebar' to add it to the list";
    }
}

export default localisation;