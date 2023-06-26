/*
 *  Bootstrap Nice Select Romanian (Romania) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['ro-RO'] = locales['ro'] = {
        formatSearch() {
            return "Căutare...";
        },
        formatHelpForTagging() {
            return "Pentru a vă crea propriile etichete, concentrați-vă pe câmpul de introducere și faceți clic pe unul dintre următoarele butoane pentru a crea obiectul:";
        },
        formatInputToShort(remainingChars) {
            return 'Vă rugăm să introduceți ' + remainingChars + ' sau mai multe caractere';
        }
    }
    DEFAULTS.locale = "ro-RO";
})(Constants.LOCALISATION);