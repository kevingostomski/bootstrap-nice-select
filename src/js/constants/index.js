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
            tagIcon: ["icon", "icon-tag"],
            minimumInputLengthContainer: ["text-warning", "minimum-input-length", "pb-3", "inactive"]
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
            tagIcon: ["icon", "icon-tag"],
            minimumInputLengthContainer: ["text-warning", "minimum-input-length", "pb-3", "inactive"]
        }
    }
}[bootstrapVersion]

const EN = {
    formatSearch() {
        return "Search...";
    },
    formatHelpForTagging() {
        return "To create your own tags, focus on the input field and click one of the following buttons to create the object:";
    }
}

const DEFAULTS = {
    animation: true,
    multiple: false,
    disabled: false,
    searchData: undefined,
    tags: false,
    tagsCheck: undefined,
    tokenSeparators: [','],
    locale: "en-US",
    theme: 'font-awesome-6',
    scrollable: {
        on: false,
        height: undefined
    },
    minimumInputLength: 0
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

    LOCALISATION: {
        'en': EN,
        'en-US': EN
    },

    DEFAULTS,

    ICONS
}