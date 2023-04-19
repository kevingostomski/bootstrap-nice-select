/*
 *  Bootstrap Nice Select German Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const localisation = {
    locales: []
}

localisation.locales['de-DE'] = localisation.locales['de'] = {
    formatSearch() {
        return "Suche...";
    },
    formatHelpForTagging() {
        return "Um eigene Tags zu erstellen, fokussieren Sie das Input-Feld und klicken nach ihrer Eingabe 'Enter' oder ',' oder 'Leertaste' um das Objekt zu erstellen";
    }
}

export default localisation;