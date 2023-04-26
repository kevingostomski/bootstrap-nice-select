/*!
 * 
 * Bootstrap-Nice-Select v1.1.0 (https://github.com/kevingostomski/bootstrap-nice-select)
 * Copyright 2023 Kevin Gostomski <kevingostomski2001@gmail.com>
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bootstrapNiceSelect", [], factory);
	else if(typeof exports === 'object')
		exports["bootstrapNiceSelect"] = factory();
	else
		root["bootstrapNiceSelect"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BootstrapNiceSelect": () => (/* binding */ BootstrapNiceSelect),
  "DEFAULTS": () => (/* binding */ bootstrap_nice_select_DEFAULTS)
});

;// CONCATENATED MODULE: ./src/js/utils/index.js
/* harmony default export */ const utils = ({
    /**
     * Create HTML single Element from string input
     * @param {String} html representing a single element
     * @return {Element}
     */
    htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    },
    /**
     * Create HTML nested Element from string input  
     * @param {String} html representing any number of sibling elements
     * @return {NodeList} 
     */
    htmlToElements(html) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.childNodes;
    },
    /**
     * Get current loaded Bootstrap Major version from project
     * @returns {String}
     */
    getBootstrapVersion() {
        let semVersion = typeof bootstrap === 'undefined' ? $().tooltip.Constructor.VERSION.split(".") : bootstrap.Tooltip.VERSION.split(".");
        let majorVersion = semVersion[0];
        return majorVersion;
    },
    /**
     * Executes a given function by name with params
     * @param {string} functionName 
     * @param {Object} context 
     * @returns Return value of the called function
     */
    executeFunctionByName(functionName, context /*, args */) {
        let args = Array.prototype.slice.call(arguments, 2);
        let namespaces = functionName.split(".");
        let funcName = namespaces.pop();
        for (let i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[funcName].apply(context, args);
    }
});
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-af-ZA.js
/*
 *  Bootstrap Nice Select Afrikaans (South Africa) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const localisation = {
    locales: []
}

localisation.locales['af-ZA'] = localisation.locales['af'] = {
    formatSearch() {
        return "Soek tans...";
    },
    formatHelpForTagging() {
        return "Om eie etikette te skep, fokus die invoerveld en druk dan 'Enter' of ',' of 'Spasiebalk' om dit by die lys te voeg";
    }
}

/* harmony default export */ const bootstrap_nice_select_af_ZA = (localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-ar-SA.js
/*
 *  Bootstrap Nice Select Arabic (Saudi Arabia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_ar_SA_localisation = {
    locales: []
}

bootstrap_nice_select_ar_SA_localisation.locales['ar-SA'] = bootstrap_nice_select_ar_SA_localisation.locales['ar'] = {
    formatSearch() {
        return "يبحث...";
    },
    formatHelpForTagging() {
        return 'لإنشاء علامات خاصة ، ركز على حقل الإدخال ثم اضغط على "إدخال" أو "مفتاح المسافة" لإضافته إلى القائمة';
    }
}

/* harmony default export */ const bootstrap_nice_select_ar_SA = (bootstrap_nice_select_ar_SA_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-bg-BG.js
/*
 *  Bootstrap Nice Select Bulgarian (Bulgaria) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_bg_BG_localisation = {
    locales: []
}

bootstrap_nice_select_bg_BG_localisation.locales['bg-BG'] = bootstrap_nice_select_bg_BG_localisation.locales['bg'] = {
    formatSearch() {
        return "Търсене...";
    },
    formatHelpForTagging() {
        return "3a създаване на собствени тагове фокусирайте полето за въвеждане и след това натиснете 'Enter' или ',' или 'Интервал', за да ro добавите към списъка";
    }
}

/* harmony default export */ const bootstrap_nice_select_bg_BG = (bootstrap_nice_select_bg_BG_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-ca-ES.js
/*
 *  Bootstrap Nice Select Catalan (Spain) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_ca_ES_localisation = {
    locales: []
}

bootstrap_nice_select_ca_ES_localisation.locales['ca-ES'] = bootstrap_nice_select_ca_ES_localisation.locales['ca'] = {
    formatSearch() {
        return "Buscant...";
    },
    formatHelpForTagging() {
        return "Per crear etiquetes pròpies, centreu el camp d'entrada i premeu 'Enter' o ',' o 'Barra espaiadora' per afegir-lo a la llista";
    }
}

/* harmony default export */ const bootstrap_nice_select_ca_ES = (bootstrap_nice_select_ca_ES_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-cs-CZ.js
/*
 *  Bootstrap Nice Select Czech (Czech Republic) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_cs_CZ_localisation = {
    locales: []
}

bootstrap_nice_select_cs_CZ_localisation.locales['cs-CZ'] = bootstrap_nice_select_cs_CZ_localisation.locales['cs'] = {
    formatSearch() {
        return "Hledání...";
    },
    formatHelpForTagging() {
        return "Chcete-li vytvořit vlastní tagy, zaměřte se na vstupní pole a poté stiskněte 'Enter' nebo ',' nebo 'Mezerník' pro přidání do seznamu";
    }
}

/* harmony default export */ const bootstrap_nice_select_cs_CZ = (bootstrap_nice_select_cs_CZ_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-de-DE.js
/*
 *  Bootstrap Nice Select German (Germany) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_de_DE_localisation = {
    locales: []
}

bootstrap_nice_select_de_DE_localisation.locales['de-DE'] = bootstrap_nice_select_de_DE_localisation.locales['de'] = {
    formatSearch() {
        return "Suchen...";
    },
    formatHelpForTagging() {
        return "Um eigene Tags zu erstellen, fokussieren Sie das Input-Feld und klicken nach ihrer Eingabe 'Enter' oder ',' oder 'Leertaste' um das Objekt zu erstellen";
    }
}

/* harmony default export */ const bootstrap_nice_select_de_DE = (bootstrap_nice_select_de_DE_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-en-US.js
/*
 *  Bootstrap Nice Select English (United States) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_en_US_localisation = {
    locales: []
}

bootstrap_nice_select_en_US_localisation.locales['en-US'] = bootstrap_nice_select_en_US_localisation.locales['en'] = {
    formatSearch() {
        return "Searching...";
    },
    formatHelpForTagging() {
        return "For creating own tags, focus the input field and then press 'Enter' or ',' or 'Spacebar' to add it to the list";
    }
}

/* harmony default export */ const bootstrap_nice_select_en_US = (bootstrap_nice_select_en_US_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-es-ES.js
/*
 *  Bootstrap Nice Select Spanish (Spain, International Sort) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_es_ES_localisation = {
    locales: []
}

bootstrap_nice_select_es_ES_localisation.locales['es-ES'] = bootstrap_nice_select_es_ES_localisation.locales['es'] = {
    formatSearch() {
        return "Buscando...";
    },
    formatHelpForTagging() {
        return "Para crear etiquetas propias, enfoque el campo de entrada y luego presione 'Entrar' o ',' o 'Barra espaciadora' para agregarlo a la lista";
    }
}

/* harmony default export */ const bootstrap_nice_select_es_ES = (bootstrap_nice_select_es_ES_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-et-EE.js
/*
 *  Bootstrap Nice Select Estonian (Estonia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_et_EE_localisation = {
    locales: []
}

bootstrap_nice_select_et_EE_localisation.locales['et-EE'] = bootstrap_nice_select_et_EE_localisation.locales['et'] = {
    formatSearch() {
        return "Otsimine...";
    },
    formatHelpForTagging() {
        return "Enda siltide loomiseks fokusseerige sisestusväli ja vajutage selle loendisse lisamiseks sisestusklahvi või ',' või tühikuklahvi";
    }
}

/* harmony default export */ const bootstrap_nice_select_et_EE = (bootstrap_nice_select_et_EE_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-fa-IR.js
/*
 *  Bootstrap Nice Select Persian (Iran) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_fa_IR_localisation = {
    locales: []
}

bootstrap_nice_select_fa_IR_localisation.locales['fa-IR'] = bootstrap_nice_select_fa_IR_localisation.locales['fa'] = {
    formatSearch() {
        return "جستجوکردن...";
    },
    formatHelpForTagging() {
        return "برای ایجاد تگ های خود، فیلد ورودی را متمرکز کنید و سپس 'Enter' یا ',' ، یا 'Spacebar' را فشار دهید تا آن را به لیست اضافه کنید.";
    }
}

/* harmony default export */ const bootstrap_nice_select_fa_IR = (bootstrap_nice_select_fa_IR_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-fi-FI.js
/*
 *  Bootstrap Nice Select Finnish (Finland) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_fi_FI_localisation = {
    locales: []
}

bootstrap_nice_select_fi_FI_localisation.locales['fi-FI'] = bootstrap_nice_select_fi_FI_localisation.locales['fi'] = {
    formatSearch() {
        return "Etsiminen...";
    },
    formatHelpForTagging() {
        return "Luodaksesi omia tunnisteita, tarkenna syöttökenttä ja lisää se luetteloon painamalla Enter tai ',' tai 'Välilyönti'";
    }
}

/* harmony default export */ const bootstrap_nice_select_fi_FI = (bootstrap_nice_select_fi_FI_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-fr-FR.js
/*
 *  Bootstrap Nice Select French (France) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_fr_FR_localisation = {
    locales: []
}

bootstrap_nice_select_fr_FR_localisation.locales['fr-FR'] = bootstrap_nice_select_fr_FR_localisation.locales['fr'] = {
    formatSearch() {
        return "Recherche...";
    },
    formatHelpForTagging() {
        return "Pour créer vos propres balises, concentrez le champ de saisie, puis appuyez sur 'Entrée' ou ',' ou 'Barre d'espacement' pour l'ajouter à la liste";
    }
}

/* harmony default export */ const bootstrap_nice_select_fr_FR = (bootstrap_nice_select_fr_FR_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-it-IT.js
/*
 *  Bootstrap Nice Select Italian (Italy) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_it_IT_localisation = {
    locales: []
}

bootstrap_nice_select_it_IT_localisation.locales['it-IT'] = bootstrap_nice_select_it_IT_localisation.locales['it'] = {
    formatSearch() {
        return "Ricerca...";
    },
    formatHelpForTagging() {
        return "Per creare i propri tag, focalizzare il campo di input e quindi premere 'Invio' o ',' o 'Barra spaziatrice' per aggiungerlo all'elenco";
    }
}

/* harmony default export */ const bootstrap_nice_select_it_IT = (bootstrap_nice_select_it_IT_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-ja-JP.js
/*
 *  Bootstrap Nice Select Japanese (Japan) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_ja_JP_localisation = {
    locales: []
}

bootstrap_nice_select_ja_JP_localisation.locales['ja-JP'] = bootstrap_nice_select_ja_JP_localisation.locales['ja'] = {
    formatSearch() {
        return "検索中...";
    },
    formatHelpForTagging() {
        return "独自のタグを作成するには、入力フィールドにフォーカスし、「Enter」または「,」または「スペースバー」を押してリストに追加します。";
    }
}

/* harmony default export */ const bootstrap_nice_select_ja_JP = (bootstrap_nice_select_ja_JP_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-nl-NL.js
/*
 *  Bootstrap Nice Select Dutch (Netherlands) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_nl_NL_localisation = {
    locales: []
}

bootstrap_nice_select_nl_NL_localisation.locales['nl-NL'] = bootstrap_nice_select_nl_NL_localisation.locales['nl'] = {
    formatSearch() {
        return "Zoeken...";
    },
    formatHelpForTagging() {
        return "Voor het maken van eigen tags, focus het invoerveld en druk op 'Enter' of ',' of 'Spatiebalk' om het aan de lijst toe te voegen";
    }
}

/* harmony default export */ const bootstrap_nice_select_nl_NL = (bootstrap_nice_select_nl_NL_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-pl-PL.js
/*
 *  Bootstrap Nice Select Polish (Poland) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_pl_PL_localisation = {
    locales: []
}

bootstrap_nice_select_pl_PL_localisation.locales['pl-PL'] = bootstrap_nice_select_pl_PL_localisation.locales['pl'] = {
    formatSearch() {
        return "Badawczy...";
    },
    formatHelpForTagging() {
        return "Aby utworzyć własne tagi, zaznacz pole wprowadzania, a następnie naciśnij 'Enter' lub ',' lub 'Spacja', aby dodać je do listy";
    }
}

/* harmony default export */ const bootstrap_nice_select_pl_PL = (bootstrap_nice_select_pl_PL_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-pt-PT.js
/*
 *  Bootstrap Nice Select Portuguese (Portugal) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_pt_PT_localisation = {
    locales: []
}

bootstrap_nice_select_pt_PT_localisation.locales['pt-PT'] = bootstrap_nice_select_pt_PT_localisation.locales['pt'] = {
    formatSearch() {
        return "Procurando...";
    },
    formatHelpForTagging() {
        return "Para criar tags próprias, foque o campo de entrada e pressione 'Enter' ou ',' ou 'Barra de espaço' para adicioná-lo à lista";
    }
}

/* harmony default export */ const bootstrap_nice_select_pt_PT = (bootstrap_nice_select_pt_PT_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-ro-RO.js
/*
 *  Bootstrap Nice Select Romanian (Romania) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_ro_RO_localisation = {
    locales: []
}

bootstrap_nice_select_ro_RO_localisation.locales['ro-RO'] = bootstrap_nice_select_ro_RO_localisation.locales['ro'] = {
    formatSearch() {
        return "In cautarea...";
    },
    formatHelpForTagging() {
        return "Pentru a crea propriile etichete, focalizați câmpul de introducere și apoi apăsați 'Enter' sau ',' sau 'bara de spațiu' pentru a-l adăuga la listă";
    }
}

/* harmony default export */ const bootstrap_nice_select_ro_RO = (bootstrap_nice_select_ro_RO_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-ru-RU.js
/*
 *  Bootstrap Nice Select Russian (Russia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_ru_RU_localisation = {
    locales: []
}

bootstrap_nice_select_ru_RU_localisation.locales['ru-RU'] = bootstrap_nice_select_ru_RU_localisation.locales['ru'] = {
    formatSearch() {
        return "Идет поиск...";
    },
    formatHelpForTagging() {
        return "Для создания собственных тегов сфокусируйте поле ввода, a затем нажмите 'Ввод', ',' или 'Пробел', чтобы добавить ero в список.";
    }
}

/* harmony default export */ const bootstrap_nice_select_ru_RU = (bootstrap_nice_select_ru_RU_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-tr-TR.js
/*
 *  Bootstrap Nice Select Turkish (Turkey) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_tr_TR_localisation = {
    locales: []
}

bootstrap_nice_select_tr_TR_localisation.locales['tr-TR'] = bootstrap_nice_select_tr_TR_localisation.locales['tr'] = {
    formatSearch() {
        return "Aranıyor...";
    },
    formatHelpForTagging() {
        return "Kendi etiketlerinizi oluşturmak için giriş alanına odaklanın ve ardından listeye eklemek için 'Enter' veya ',' veya 'Boşluk Çubuğu'na basın";
    }
}

/* harmony default export */ const bootstrap_nice_select_tr_TR = (bootstrap_nice_select_tr_TR_localisation);
;// CONCATENATED MODULE: ./src/js/locale/bootstrap-nice-select-zh-CN.js
/*
 *  Bootstrap Nice Select Chinese (Simplified, People's Republic of China) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

const bootstrap_nice_select_zh_CN_localisation = {
    locales: []
}

bootstrap_nice_select_zh_CN_localisation.locales['zh-ZN'] = bootstrap_nice_select_zh_CN_localisation.locales['zh'] = {
    formatSearch() {
        return "搜索中...";
    },
    formatHelpForTagging() {
        return "要创建自己的标签，请聚焦输入字段，然后按'Enter'或','或“空格键”将其添加到列表中";
    }
}

/* harmony default export */ const bootstrap_nice_select_zh_CN = (bootstrap_nice_select_zh_CN_localisation);
;// CONCATENATED MODULE: ./src/js/constants/index.js


const VERSION = "1.1.0";

const bootstrapVersion = utils.getBootstrapVersion();

const CONSTANTS = {
    4: {
        classes: {
            mainContainer: ['bootstrap-nice-select', 'col'],
            deleteContainer: ['row-12', 'mt-3'],
            deleteContainerHeader: ['my-3'],
            deleteContainerList: ["list-group", "list-group-flush", "delete-list", "w-100"],
            deleteButtonWrapper: ["d-flex", "flex-row", "justify-content-between", "align-items-center"],
            deleteButtonText: ["m-0", "px-3", "optText", "text-truncate"],
            deleteButton: ['btn', 'btn-danger', 'delete'],
            deleteButtonIcon: ["icon"],
            addContainer: ['row-12', 'mt-3'],
            addContainerWrapper: ["d-flex", "flex-row", "justify-content-end", "align-items-center"],
            addButton: ['btn', 'btn-success', 'add'],
            addbuttonIcon: ['icon'],
            overlayContainer: ['bootstrap-nice-select-overlay'],
            overlayContainerWrapper: ["h-100", "bootstrap-nice-select-closer"],
            searchContainer: ["search-container"],
            searchInputWrapper: ["d-flex", "flex-row", "justify-content-start", "align-items-center", "p-3"],
            searchIcon: ['icon'],
            searchInput: ['w-100'],
            searchHr: ['hr'],
            searchHrFocus: ['focus-border'],
            searchListItem: ["list-group-item", "d-flex", "justify-content-between", "align-items-center"],
            searchListItemText: ["text-truncate"],
            searchListItemBadge: ["badge", "badge-pill"],
            tagIcon: ["icon", "icon-tag"]
        }
    },
    5: {
        classes: {
            mainContainer: ['bootstrap-nice-select', 'col'],
            deleteContainer: ['row-12', 'mt-3'],
            deleteContainerHeader: ['my-3'],
            deleteContainerList: ["list-group", "list-group-flush", "delete-list", "w-100"],
            deleteButtonWrapper: ["d-flex", "flex-row", "justify-content-between", "align-items-center"],
            deleteButtonText: ["m-0", "px-3", "optText", "text-truncate"],
            deleteButton: ['btn', 'btn-danger', 'delete', "my-1"],
            deleteButtonIcon: ["icon"],
            addContainer: ['row-12', 'mt-3'],
            addContainerWrapper: ["d-flex", "flex-row", "justify-content-end", "align-items-center"],
            addButton: ['btn', 'btn-success', 'add'],
            addbuttonIcon: ['icon'],
            overlayContainer: ['bootstrap-nice-select-overlay'],
            overlayContainerWrapper: ["h-100", "bootstrap-nice-select-closer"],
            searchContainer: ["search-container"],
            searchInputWrapper: ["d-flex", "flex-row", "justify-content-start", "align-items-center", "p-3"],
            searchIcon: ['icon'],
            searchInput: ['w-100'],
            searchHr: ['hr'],
            searchHrFocus: ['focus-border'],
            searchListItem: ["list-group-item", "d-flex", "justify-content-between", "align-items-center"],
            searchListItemText: ["text-truncate"],
            searchListItemBadge: ["badge", "rounded-pill"],
            tagIcon: ["icon", "icon-tag"]
        }
    }
}[bootstrapVersion]

const LOCALISATION = {
}
;





















function initAvailableLocales() {
    for (let lang of [bootstrap_nice_select_af_ZA, bootstrap_nice_select_ar_SA, bootstrap_nice_select_bg_BG, bootstrap_nice_select_ca_ES, bootstrap_nice_select_cs_CZ, bootstrap_nice_select_de_DE, bootstrap_nice_select_en_US, bootstrap_nice_select_es_ES, bootstrap_nice_select_et_EE, bootstrap_nice_select_fa_IR, bootstrap_nice_select_fi_FI, bootstrap_nice_select_fr_FR, bootstrap_nice_select_it_IT, bootstrap_nice_select_ja_JP, bootstrap_nice_select_nl_NL, bootstrap_nice_select_pl_PL, bootstrap_nice_select_pt_PT, bootstrap_nice_select_ro_RO, bootstrap_nice_select_ru_RU, bootstrap_nice_select_tr_TR, bootstrap_nice_select_zh_CN]) {
        for (let [key, value] of Object.entries(lang.locales)) {
            LOCALISATION[key] = value;
        }
    }
}
initAvailableLocales();

const DEFAULTS = {
    multiple: false,
    searchData: undefined,
    tags: false,
    tokenSeparators: [',', ' ', 'Enter'],
    locale: "en-US",
    theme: 'font-awesome-6',
    scrollable: {
        on: false,
        height: undefined
    },
    afterAdd: undefined,
    afterDelete: undefined
}

const ICONS = {
    glyphicon: {
        search: '<span class="glyphicon glyphicon-search"></span>',
        delete: '<span class="glyphicon glyphicon-trash"></span>',
        add: '<span class="glyphicon glyphicon-plus"></span>',
        tag: '<span class="glyphicon glyphicon-exclamation-sign"></span>'
    },
    'font-awesome-6': {
        search: '<i class="fa-solid fa-magnifying-glass"></i>',
        delete: '<i class="fa-solid fa-trash"></i>',
        add: '<i class="fa-solid fa-plus"></i>',
        tag: '<i class="fa-solid fa-circle-exclamation"></i>'
    },
    'font-awesome-5': {
        search: '<i class="fas fa-search"></i>',
        delete: '<i class="fas fa-trash"></i>',
        add: '<i class="fas fa-plus"></i>',
        tag: '<i class="fas fa-exclamation-circle"></i>'
    },
    'font-awesome-4': {
        search: '<i class="fa fa-search"></i>',
        delete: '<i class="fa fa-trash"></i>',
        add: '<i class="fa fa-plus"></i>',
        tag: '<i class="fa fa-exclamation-circle"></i>'
    },
    'material-icons': {
        search: '<i class="material-icons">search</i>',
        delete: '<i class="material-icons">delete</i>',
        add: '<i class="material-icons">add</i>',
        tag: '<i class="material-icons">priority_high</i>'
    },
    'bi': {
        search: '<i class="bi bi-search"></i>',
        delete: '<i class="bi bi-trash"></i>',
        add: '<i class="bi bi-plus"></i>',
        tag: '<i class="bi bi-exclamation-circle"></i>'
    }
}

/* harmony default export */ const constants = ({
    VERSION,

    CONSTANTS,

    LOCALISATION,

    DEFAULTS,

    ICONS
});
;// CONCATENATED MODULE: ./src/js/bootstrap-nice-select.js




/**
 * Needed to set globally options for multiple creation of BootstrapNiceSelect
 */
const bootstrap_nice_select_DEFAULTS = Object.create(constants.DEFAULTS);

/**
 * Initialize select field
 * @param {string} selector Query selector for initialization  
 * @param {Object} options Set options for creation for only this selected select field
 * @returns {Object} Specific object prototype with methods and properties
 */
const BootstrapNiceSelect = function (selector, options) {

    function getRemoteSearchData(filter) {
        if (_bootstrapNiceSelect['searchData'] instanceof Function || typeof _bootstrapNiceSelect['searchData'] === 'function') {
            _searchData = _bootstrapNiceSelect['searchData'](filter);
        } else {
            let remoteData = utils.executeFunctionByName(_bootstrapNiceSelect['searchData'], window, filter);
            _searchData = remoteData;
        }
    }

    function triggerCallbackAfterDeleteByNameOrFunction(key, text) {
        if (_bootstrapNiceSelect['afterDelete'] instanceof Function || typeof _bootstrapNiceSelect['afterDelete'] === 'function') {
            _bootstrapNiceSelect['afterDelete'](key, text);
        } else {
            utils.executeFunctionByName(_bootstrapNiceSelect['afterDelete'], window, key, text);
        }
    }

    function triggerCallbackAfterAddByNameOrFunction(key, text) {
        if (_bootstrapNiceSelect['afterAdd'] instanceof Function || typeof _bootstrapNiceSelect['afterAdd'] === 'function') {
            _bootstrapNiceSelect['afterAdd'](key, text);
        } else {
            utils.executeFunctionByName(_bootstrapNiceSelect['afterAdd'], window, key, text);
        }
    }

    function refreshSearchList() {
        let searchUl = _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul");
        searchUl.innerHTML = "";
        for (let searchOption of _searchData.items) {
            let li = document.createElement("li");
            li.classList.add(...constants.CONSTANTS.classes.searchListItem);
            let text = document.createElement("span");
            text.classList.add(...constants.CONSTANTS.classes.searchListItemText);
            text.innerHTML = searchOption.text;
            li.appendChild(text);
            li.tabIndex = -1;
            li.setAttribute("data-id", searchOption.id);
            if (searchOption.optGroup) {
                let badge = document.createElement("span");
                badge.classList.add(...constants.CONSTANTS.classes.searchListItemBadge);
                badge.innerText = searchOption.optGroup;
                li.appendChild(badge);
            }
            li.addEventListener('click', function () {
                if (!_bootstrapNiceSelect.multiple) {
                    let deleteLiElements = _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').getElementsByTagName("li");
                    for (let i = 0; (li = deleteLiElements[i]); i++) {
                        li.parentNode.removeChild(li);
                    }
                    let oldSelectedOption = _selectField.querySelector('option[selected="selected"]');
                    if (oldSelectedOption) {
                        oldSelectedOption.removeAttribute("selected");
                    }
                }
                let option = _selectField.querySelector(`option[value="${this.getAttribute("data-id")}"]`);
                if (option) {
                    option.setAttribute("selected", "selected");
                } else {
                    let newOption = document.createElement("option");
                    newOption.value = searchOption.id;
                    newOption.innerText = searchOption.text;
                    newOption.setAttribute("selected", "selected");
                    _selectField.appendChild(newOption);
                }
                if (_bootstrapNiceSelect.searchData === undefined) {
                    _searchData.items = _searchData.items.filter(data => data.id !== this.getAttribute("data-id"));
                }
                _selectField.nextElementSibling.querySelector('.bootstrap-nice-select-overlay').classList.remove("active");
                this.parentNode.classList.remove("active");
                if (_selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list button[data-id=${searchOption.id}]`)) {
                    return;
                }
                if (searchOption.optGroup) {
                    let deleteButton = createDeleteButton(searchOption.id, searchOption.text, searchOption.optGroup);
                    let selectedHeader = _selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list h5[data-optgroup=${searchOption.optGroup}]`);
                    if (selectedHeader) {
                        selectedHeader.insertAdjacentElement('afterend', deleteButton);
                    } else {
                        let newHeader = document.createElement("h5");
                        newHeader.classList.add(...constants.CONSTANTS.classes.deleteContainerHeader);
                        newHeader.innerHTML = searchOption.optGroup;
                        newHeader.setAttribute("data-optgroup", searchOption.optGroup);
                        _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(newHeader);
                        _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(deleteButton);
                    }
                } else {
                    let deleteButton = createDeleteButton(searchOption.id, searchOption.text, undefined);
                    _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(deleteButton);
                }
                if (_bootstrapNiceSelect['afterAdd'] !== undefined) {
                    triggerCallbackAfterAddByNameOrFunction(searchOption.id, searchOption.text);
                }
            });
            li.addEventListener('keydown', function (event) {
                event.preventDefault();
                let liElements = _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li:not(.hidden)");
                if (_bootstrapNiceSelect.searchData !== undefined) {
                    liElements = _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li");
                }
                if (event.key === "ArrowDown") {
                    if (_currentLi + 1 >= liElements.length) {
                        _currentLi = 0;
                    } else {
                        _currentLi++;
                    }
                    liElements[_currentLi].tabIndex = 0;
                    liElements[_currentLi].focus();
                    this.tabIndex = -1;
                }
                if (event.key === "ArrowUp") {
                    if (_currentLi - 1 < 0) {
                        _currentLi = liElements.length - 1;
                    } else {
                        _currentLi--;
                    }
                    liElements[_currentLi].tabIndex = 0;
                    liElements[_currentLi].focus();
                    this.tabIndex = -1;
                }
                if (event.key === "Tab") {
                    _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container input").focus();
                }
                if (event.key === "Enter") {
                    this.click();
                }
            });

            searchUl.appendChild(li);
        }
    }

    function createDeleteButton(optKey, optValue, optGroup) {

        let deleteButton = function () {
            let divWrapper = document.createElement("div");
            divWrapper.classList.add(...constants.CONSTANTS.classes.deleteButtonWrapper);

            let optValueElement = document.createElement("p");
            optValueElement.classList.add(...constants.CONSTANTS.classes.deleteButtonText);
            optValueElement.innerText = optValue;
            divWrapper.appendChild(optValueElement);

            let button = document.createElement("button");
            button.classList.add(...constants.CONSTANTS.classes.deleteButton);
            button.setAttribute("data-id", optKey);
            let icon = document.createElement("span");
            icon.classList.add(...constants.CONSTANTS.classes.deleteButtonIcon);
            icon.insertAdjacentHTML("beforeend", _bootstrapNiceSelect.icons && _bootstrapNiceSelect.icons.delete ? _bootstrapNiceSelect.icons.delete : constants.ICONS[_bootstrapNiceSelect.theme].delete);
            button.appendChild(icon);
            divWrapper.appendChild(button);

            button.addEventListener("click", function () {
                _selectField.querySelector(`option[value="${this.getAttribute("data-id")}"]`).removeAttribute("selected");
                if (this.parentElement.parentElement.previousElementSibling && this.parentElement.parentElement.previousElementSibling.tagName.toUpperCase() === "H5" && (this.parentElement.parentElement.nextElementSibling && this.parentElement.parentElement.nextElementSibling.tagName.toUpperCase() === "H5" || !this.parentElement.parentElement.nextElementSibling)) {
                    this.parentElement.parentElement.previousElementSibling.remove();
                }
                this.parentElement.parentElement.remove();
                if (!_bootstrapNiceSelect.multiple && _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select ul.delete-list li").length === 0) {
                    _selectField.selectedIndex = "-1";
                }
                if (_bootstrapNiceSelect.searchData === undefined) {
                    if (optGroup) {
                        _searchData.items.push({
                            id: optKey,
                            text: optValue,
                            optGroup: optGroup
                        });
                    } else {
                        _searchData.items.push({
                            id: optKey,
                            text: optValue
                        });
                    }
                }
                if (_bootstrapNiceSelect['afterDelete'] !== undefined) {
                    triggerCallbackAfterDeleteByNameOrFunction(optKey, optValue);
                }
            });
            return divWrapper;
        }

        let liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        liElement.appendChild(deleteButton());
        return liElement;
    }

    function initDeleteField() {

        let optGroupsAvailable = function () {
            for (let optGroup of optGroups) {
                let headerElement = document.createElement("h5");
                headerElement.classList.add(...constants.CONSTANTS.classes.deleteContainerHeader);
                headerElement.innerHTML = optGroup.label;
                headerElement.setAttribute("data-optgroup", optGroup.label);
                ulElement.appendChild(headerElement);
                for (let optionElement of optGroup.children) {
                    if (optionElement.selected) {
                        ulElement.appendChild(createDeleteButton(optionElement.value, optionElement.innerText, optGroup.label));
                    } else {
                        if (_bootstrapNiceSelect.searchData === undefined) {
                            _searchData.items.push({
                                id: optionElement.value,
                                text: optionElement.innerText,
                                optGroup: optGroup.label
                            });
                        }
                    }
                }
            }
        }

        let optGroupsNotAvailable = function () {
            for (let optionElement of _selectField.children) {
                if (optionElement.selected) {
                    ulElement.appendChild(createDeleteButton(optionElement.value, optionElement.innerText, undefined));
                } else {
                    if (_bootstrapNiceSelect.searchData === undefined) {
                        _searchData.items.push({
                            id: optionElement.value,
                            text: optionElement.innerText
                        });
                    }
                }
            }
        }

        let ulElement = document.createElement("ul");
        ulElement.classList.add(...constants.CONSTANTS.classes.deleteContainerList);
        if (_bootstrapNiceSelect.scrollable.on) {
            ulElement.classList.add("scrollable");
            console.log(_bootstrapNiceSelect.scrollable.height);
            ulElement.style.height = _bootstrapNiceSelect.scrollable.height;
        }
        let optGroups = _selectField.getElementsByTagName("optgroup");
        if (optGroups.length !== 0) {
            optGroupsAvailable();
        } else {
            optGroupsNotAvailable();
        }
        return ulElement;
    }

    function initAddField() {
        let divWrapper = document.createElement("div");
        divWrapper.classList.add(...constants.CONSTANTS.classes.addContainerWrapper);

        let button = document.createElement("button");
        button.classList.add(...constants.CONSTANTS.classes.addButton);
        button.addEventListener("click", function () {
            _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay").classList.add("active");

            let input = _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container input");
            input.value = '';
            input.focus();

            refreshSearchList();
        });
        let icon = document.createElement("span");
        icon.classList.add(...constants.CONSTANTS.classes.addbuttonIcon);
        icon.insertAdjacentHTML("beforeend", _bootstrapNiceSelect.icons && _bootstrapNiceSelect.icons.add ? _bootstrapNiceSelect.icons.add : constants.ICONS[_bootstrapNiceSelect.theme].add);
        button.appendChild(icon);

        divWrapper.appendChild(button);
        return divWrapper;
    }

    function initOverlay() {

        function initSearchList() {
            let ul = document.createElement("ul");
            ul.classList.add("list-group");
            return ul;
        }

        let hideOverlayOnClick = function (event) {
            if (_bootstrapNiceSelect.searchData === undefined) {
                let target = (event && event.target);
                if (target == this) {
                    overlayElement.classList.remove("active");
                    _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                    _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li").forEach(element => element.tabIndex = -1);
                }
            } else {
                let target = (event && event.target);
                if (target == this) {
                    overlayElement.classList.remove("active");
                    _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                }
            }
        }

        let filterOnSearchInput = function () {
            if (_bootstrapNiceSelect.searchData === undefined) {
                let filter = this.value.toUpperCase();
                if (filter.length > 0) {
                    _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.add("active");
                } else {
                    _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                }
                let liNodes = _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").getElementsByTagName("li");
                for (let i = 0; i < liNodes.length; i++) {
                    let txtValue = liNodes[i].textContent || liNodes[i].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        liNodes[i].classList.remove("hidden");
                    } else {
                        liNodes[i].classList.add("hidden");
                    }
                }
            } else {
                let filter = this.value;
                if (filter.length <= 0) {
                    _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                    return;
                }
                _selectField.nextElementSibling.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.add("active");
                getRemoteSearchData(filter);
                refreshSearchList();
            }
        }

        let keyboardInteraction = function (event) {

            let allowTagsInputInteraction = function (keyValue) {
                if (_bootstrapNiceSelect.tokenSeparators.includes(event.key)) {
                    let optionAlreadyCreatedBefore = _selectField.querySelector(`option[value="${keyValue}"]`);
                    if (optionAlreadyCreatedBefore) {
                        optionAlreadyCreatedBefore.setAttribute("selected", "selected");
                    } else {
                        let newOption = document.createElement("option");
                        newOption.value = keyValue;
                        newOption.innerText = keyValue;
                        newOption.setAttribute("selected", "selected");
                        _selectField.appendChild(newOption);
                    }
                    if (!_selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list button[data-id=${keyValue}]`)) {
                        let newDeleteButton = createDeleteButton(keyValue, keyValue, undefined);
                        _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(newDeleteButton);
                    }
                    _selectField.nextElementSibling.querySelector('.bootstrap-nice-select-overlay').classList.remove("active");
                    _selectField.nextElementSibling.querySelector('.bootstrap-nice-select-overlay div.search-container ul').classList.remove("active");
                }
            }

            if (_bootstrapNiceSelect.searchData === undefined) {
                if (event.key === "Tab") {
                    event.preventDefault();
                    let liElements = _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li:not(.hidden)");
                    if (liElements.length > 0) {
                        liElements.forEach(element => element.tabIndex = -1);
                        liElements[0].tabIndex = 0;
                        _currentLi = 0;
                        liElements[0].focus();
                    }
                };
            } else {
                if (event.key === "Tab") {
                    event.preventDefault();
                    let liElements = _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li");
                    if (liElements.length > 0) {
                        liElements[0].tabIndex = 0;
                        _currentLi = 0;
                        liElements[0].focus();
                    }
                }
            }
            if (_bootstrapNiceSelect.tags) {
                allowTagsInputInteraction(this.value.trim());
            }
        }

        let overlayElement = document.createElement("div");
        overlayElement.classList.add(...constants.CONSTANTS.classes.overlayContainer);

        let divWrapper = document.createElement("div");
        divWrapper.classList.add(...constants.CONSTANTS.classes.overlayContainerWrapper);
        divWrapper.addEventListener("click", hideOverlayOnClick);

        let search = document.createElement("div");
        search.classList.add(...constants.CONSTANTS.classes.searchContainer);

        let searchInputWrapper = document.createElement("div");
        searchInputWrapper.classList.add(...constants.CONSTANTS.classes.searchInputWrapper);
        let searchIcon = document.createElement("span");
        searchIcon.classList.add(...constants.CONSTANTS.classes.searchIcon);
        searchIcon.insertAdjacentHTML("beforeend", _bootstrapNiceSelect.icons && _bootstrapNiceSelect.icons.search ? _bootstrapNiceSelect.icons.search : constants.ICONS[_bootstrapNiceSelect.theme].search);
        let searchInput = document.createElement("input");
        searchInput.classList.add("w-100");
        searchInput.setAttribute("placeholder", constants.LOCALISATION[_bootstrapNiceSelect.locale].formatSearch());
        searchInput.addEventListener("keyup", filterOnSearchInput);
        searchInput.addEventListener('keydown', keyboardInteraction);
        searchInput.addEventListener("focusin", function () {
            _selectField.nextElementSibling.querySelector('div.search-container span.focus-border').classList.add("active");
        });
        searchInput.addEventListener("focusout", function () {
            _selectField.nextElementSibling.querySelector('div.search-container span.focus-border').classList.remove("active");
        });
        searchInputWrapper.appendChild(searchIcon);
        searchInputWrapper.appendChild(searchInput);
        if (_bootstrapNiceSelect.tags) {
            let tagIcon = document.createElement("span");
            tagIcon.classList.add(...constants.CONSTANTS.classes.tagIcon);
            tagIcon.insertAdjacentHTML("beforeend", _bootstrapNiceSelect.icons && _bootstrapNiceSelect.icons.tag ? _bootstrapNiceSelect.icons.tag : constants.ICONS[_bootstrapNiceSelect.theme].tag);
            let tooltip = document.createElement("span");
            tooltip.classList.add("tooltip-own");
            tagIcon.appendChild(tooltip);
            tooltip.innerText = constants.LOCALISATION[_bootstrapNiceSelect.locale].formatHelpForTagging();
            searchInputWrapper.appendChild(tagIcon);
        }
        search.appendChild(searchInputWrapper);
        let focusHr = document.createElement("span");
        focusHr.classList.add(...constants.CONSTANTS.classes.searchHrFocus);
        search.appendChild(focusHr);
        let hr = document.createElement("span");
        hr.classList.add(...constants.CONSTANTS.classes.searchHr);
        search.appendChild(hr);
        search.appendChild(initSearchList());
        divWrapper.appendChild(search);
        overlayElement.appendChild(divWrapper);
        return overlayElement;
    }

    let syncViaHtml = function () {
        if (_selectField.getAttribute('multiple')) {
            _bootstrapNiceSelect.multiple = true;
        } else {
            _bootstrapNiceSelect.multiple = false;
            if (!_selectField.querySelector('option[selected="selected"]')) {
                _selectField.selectedIndex = "-1";
                for (let option of _selectField) {
                    option.selected = false;
                }
            }
        }
        if (_selectField.getAttribute('data-tags')) {
            _bootstrapNiceSelect.tags = _selectField.getAttribute('data-tags');
        }
        if (_selectField.getAttribute("data-locale")) {
            _bootstrapNiceSelect.locale = _selectField.getAttribute("data-locale");
        }
        if (_selectField.getAttribute("data-search-data")) {
            _bootstrapNiceSelect.locale = _selectField.getAttribute("data-search-data");
        }
        if (_selectField.getAttribute("data-theme")) {
            _bootstrapNiceSelect.theme = _selectField.getAttribute("data-theme");
        }
        if (_selectField.getAttribute("data-scrollable-on")) {
            _bootstrapNiceSelect.scrollable.on = _selectField.getAttribute("data-scrollable-on");
            _bootstrapNiceSelect.scrollable.height = _selectField.getAttribute("data-scrollable-height");
        }
    }

    let syncViaJavascript = function () {
        if (options) {
            for (let [key, value] of Object.entries(options)) {
                _bootstrapNiceSelect[key] = value;
            }
        }
    }

    /* 
     *
     * ####################
     * ####    START   ####
     * ####################
     * 
     */

    let _selectField = document.querySelector(selector);
    _selectField.setAttribute("hidden", "hidden");
    let _currentLi = 0;
    let _searchData = {
        items: []
    };

    const _bootstrapNiceSelect = Object.create(bootstrap_nice_select_DEFAULTS);

    // sync options
    syncViaHtml();
    syncViaJavascript();

    let main = document.createElement("div");
    main.classList.add(...constants.CONSTANTS.classes.mainContainer);
    let deleteElement = initDeleteField();
    let addElement = initAddField();

    let addCol = document.createElement("div");
    addCol.classList.add(...constants.CONSTANTS.classes.addContainer);
    addCol.appendChild(addElement);

    let deleteCol = document.createElement("div");
    deleteCol.classList.add(...constants.CONSTANTS.classes.deleteContainer);
    deleteCol.appendChild(deleteElement);

    main.appendChild(addCol);
    main.appendChild(deleteCol);
    main.appendChild(initOverlay());

    _selectField.parentNode.insertBefore(main, _selectField.nextSibling);

    return _bootstrapNiceSelect;
}

document.addEventListener("DOMContentLoaded", function () {
    let selectsToInit = document.querySelectorAll('select[data-bs-toggle="bootstrap-nice-select"]');
    if (selectsToInit.length === 0) {
        selectsToInit = document.querySelectorAll('select[data-toggle="bootstrap-nice-select"]')
    }
    for (let i = 0; i < selectsToInit.length; i++) {
        selectsToInit[i].classList.add(`bootstrap-nice-select-element-${i}`);
        BootstrapNiceSelect(`.bootstrap-nice-select-element-${i}`);
    }
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bootstrap-nice-select.js.map