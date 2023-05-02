import Utils from "../utils/index.js";

const VERSION = "1.1.0";

const bootstrapVersion = Utils.getBootstrapVersion();

const CONSTANTS = {
    4: {
        classes: {
            mainContainer: ['bootstrap-nice-select', 'col'],
            deleteContainer: ['row-12', 'mt-3'],
            deleteContainerHeader: ['my-3'],
            deleteContainerList: ["list-group", "list-group-flush", "delete-list", "w-100"],
            deleteButtonWrapper: ["d-flex", "flex-row", "justify-content-between", "align-items-center"],
            deleteButtonText: ["m-0", "px-3", "optText", "text-truncate"],
            deleteButton: ['d-flex', 'align-items-center', 'btn', 'delete'],
            deleteButtonIcon: ["icon"],
            addContainer: ['row-12', 'mt-3'],
            addContainerWrapper: ["d-flex", "flex-row", "justify-content-end", "align-items-center"],
            addButton: ['d-flex', 'align-items-center', 'btn', 'add'],
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
            deleteButton: ['d-flex', 'align-items-center', 'btn', 'delete', "my-1"],
            deleteButtonIcon: ["icon"],
            addContainer: ['row-12', 'mt-3'],
            addContainerWrapper: ["d-flex", "flex-row", "justify-content-end", "align-items-center"],
            addButton: ['d-flex', 'align-items-center', 'btn', 'add'],
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
import af from "..//locale/bootstrap-nice-select-af-ZA.js";
import ar from "../locale/bootstrap-nice-select-ar-SA.js";
import bg from "../locale/bootstrap-nice-select-bg-BG.js";
import ca from "../locale/bootstrap-nice-select-ca-ES.js"
import cs from "../locale/bootstrap-nice-select-cs-CZ.js"
import ger from "../locale/bootstrap-nice-select-de-DE.js";
import eng from "../locale/bootstrap-nice-select-en-US.js";
import es from "../locale/bootstrap-nice-select-es-ES.js";
import et from "../locale/bootstrap-nice-select-et-EE.js";
import fa from "../locale/bootstrap-nice-select-fa-IR.js";
import fi from "../locale/bootstrap-nice-select-fi-FI.js";
import fr from "../locale/bootstrap-nice-select-fr-FR.js";
import it from "../locale/bootstrap-nice-select-it-IT.js";
import ja from "../locale/bootstrap-nice-select-ja-JP.js";
import nl from "../locale/bootstrap-nice-select-nl-NL.js";
import pl from "../locale/bootstrap-nice-select-pl-PL.js";
import pt from "../locale/bootstrap-nice-select-pt-PT.js";
import ro from "../locale/bootstrap-nice-select-ro-RO.js";
import ru from "../locale/bootstrap-nice-select-ru-RU.js";
import tr from "../locale/bootstrap-nice-select-tr-TR.js";
import zh from "../locale/bootstrap-nice-select-zh-CN.js";

function initAvailableLocales() {
    for (let lang of [af, ar, bg, ca, cs, ger, eng, es, et, fa, fi, fr, it, ja, nl, pl, pt, ro, ru, tr, zh]) {
        for (let [key, value] of Object.entries(lang.locales)) {
            LOCALISATION[key] = value;
        }
    }
}
initAvailableLocales();

const DEFAULTS = {
    multiple: false,
    disabled: false,
    searchData: undefined,
    tags: false,
    tokenSeparators: [',', ' ', 'Enter'],
    locale: "en-US",
    theme: 'font-awesome-6',
    scrollable: {
        on: false,
        height: undefined
    }
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

export default {
    VERSION,

    CONSTANTS,

    LOCALISATION,

    DEFAULTS,

    ICONS
}