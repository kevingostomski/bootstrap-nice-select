/*!
 * 
 * Bootstrap-Nice-Select v1.4.1 (https://github.com/kevingostomski/bootstrap-nice-select)
 * Copyright 2023 Kevin Gostomski <kevingostomski2001@gmail.com>
 * Licensed under MIT (https://github.com/kevingostomski/bootstrap-nice-select/blob/main/LICENSE)
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
  "DEFAULTS": () => (/* binding */ bootstrap_nice_select_nl_NL_DEFAULTS)
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
    minimumInputLength: 1
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

    LOCALISATION: {
        'en': EN,
        'en-US': EN
    },

    DEFAULTS,

    ICONS
});
;// CONCATENATED MODULE: ./src/js/bootstrap-nice-select-nl-NL.js




/**
 * Needed to set globally options for multiple creation of BootstrapNiceSelect
 */
const bootstrap_nice_select_nl_NL_DEFAULTS = Object.create(constants.DEFAULTS);

/**
 * Initialize select field
 * @param {string} selector Query selector for initialization  
 * @param {Object} options Set options for creation for only this selected select field
 * @returns {Object} Specific object prototype with methods and properties
 */
const BootstrapNiceSelect = function (selector, options) {

    function getRemoteSearchData(filter) {
        if (_bootstrapNiceSelect['searchData'] instanceof Function || typeof _bootstrapNiceSelect['searchData'] === 'function') {
            let remoteData = _bootstrapNiceSelect['searchData'](filter);
            Promise.resolve(remoteData).then(data => {
                _searchData = data;
                refreshSearchList();
                // it could be that search was already emptied again or miminum input is not reached so search list needs to be invisible
                if (document.querySelector(".bootstrap-nice-select-overlay div.search-container input").value.length < _bootstrapNiceSelect.minimumInputLength) {
                    document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                }
            });
        } else {
            let remoteData = utils.executeFunctionByName(_bootstrapNiceSelect['searchData'], window, filter);
            Promise.resolve(remoteData).then(data => {
                _searchData = data;
                refreshSearchList();
                // it could be that search was already emptied again or miminum input is not reached so search list needs to be invisible
                if (document.querySelector(".bootstrap-nice-select-overlay div.search-container input").value.length < _bootstrapNiceSelect.minimumInputLength) {
                    document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                }
            });
        }
    }

    function showMinimumInputLengthWarning(charsLeftToEnter) {
        let minimumInputLengthWrapper = document.querySelector(".bootstrap-nice-select-overlay div.search-container .minimum-input-length");
        minimumInputLengthWrapper.innerText = constants.LOCALISATION[_bootstrapNiceSelect.locale].formatInputToShort(charsLeftToEnter);
        minimumInputLengthWrapper.classList.remove("inactive");
    }

    function hideMinimumInputLengthWarning() {
        document.querySelector(".bootstrap-nice-select-overlay div.search-container .minimum-input-length").classList.add("inactive");
    }

    function openOverlay() {
        if (_bootstrapNiceSelect.animation) {
            document.querySelector(".bootstrap-nice-select-overlay").classList.add("animate-in");
            showMinimumInputLengthWarning(_bootstrapNiceSelect.minimumInputLength);
        }
        else {
            document.querySelector(".bootstrap-nice-select-overlay").classList.add("active");
        }
    }

    function closeOverlay() {
        document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
        if (_bootstrapNiceSelect.animation) {
            document.querySelector(".bootstrap-nice-select-overlay").classList.add("animate-out");
            setTimeout(function () {
                document.querySelector("body").removeChild(document.querySelector(".bootstrap-nice-select-overlay"));
            }, 500);
        } else {
            document.querySelector(".bootstrap-nice-select-overlay").classList.remove("active");
            document.querySelector("body").removeChild(document.querySelector(".bootstrap-nice-select-overlay"));
        }
    }

    function refreshSearchList() {
        let searchUl = document.querySelector(".bootstrap-nice-select-overlay div.search-container ul");
        searchUl.innerHTML = "";
        for (let searchOption of _searchData.items) {

            const afterAdd = new CustomEvent("inserted.bs.bootstrap-nice-select", {
                detail: {
                    key: searchOption.id,
                    value: searchOption.text
                }
            });

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
                    let oldSelectedOption = _selectField.querySelector('option[selected]');
                    if (oldSelectedOption) {
                        oldSelectedOption.removeAttribute("selected");
                    }
                }
                let option = _selectField.querySelector(`option[value="${this.getAttribute("data-id")}"]`);
                if (option) {
                    option.setAttribute("selected", 'selected');
                } else {
                    let newOption = document.createElement("option");
                    newOption.value = searchOption.id;
                    newOption.innerText = searchOption.text;
                    newOption.setAttribute("selected", 'selected');
                    _selectField.appendChild(newOption);
                }
                closeOverlay();
                if (_selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list button[data-id="${searchOption.id}"]`)) {
                    // already selected. nothing to do...
                    return;
                }
                if (searchOption.optGroup) {
                    let deleteButton = createDeleteButton(searchOption.id, searchOption.text, searchOption.optGroup, (searchOption.disabled) ? searchOption.disabled : false);
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
                    let deleteButton = createDeleteButton(searchOption.id, searchOption.text, undefined, (searchOption.disabled) ? searchOption.disabled : false);
                    _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(deleteButton);
                }
                _selectField.dispatchEvent(afterAdd);
            });
            li.addEventListener('keydown', function (event) {
                event.preventDefault();
                let liElements = document.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li:not(.hidden)");
                if (_bootstrapNiceSelect.searchData !== undefined) {
                    liElements = document.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li");
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
                    document.querySelector(".bootstrap-nice-select-overlay div.search-container input").focus();
                }
                if (event.key === "Enter") {
                    this.click();
                }
            });
            searchUl.appendChild(li);
        }
        searchUl.classList.add("active");
    }

    function createDeleteButton(optKey, optValue, optGroup, disabled) {

        const afterDelete = new CustomEvent("removed.bs.bootstrap-nice-select", {
            detail: {
                key: optKey,
                value: optValue
            }
        });

        let deleteButton = function () {

            let divWrapper = document.createElement("div");
            divWrapper.classList.add(...constants.CONSTANTS.classes.deleteButtonWrapper);

            let optValueElement = document.createElement("p");
            optValueElement.classList.add(...constants.CONSTANTS.classes.deleteButtonText);
            optValueElement.innerText = optValue;
            divWrapper.appendChild(optValueElement);

            let button = document.createElement("button");
            button.classList.add(...constants.CONSTANTS.classes.deleteButton);
            button.setAttribute("type", "button");
            button.setAttribute("data-id", optKey);
            if (disabled || _bootstrapNiceSelect.disabled) {
                button.setAttribute("disabled", 'disabled');
            }
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
                if (_bootstrapNiceSelect.searchData === undefined && !_searchData.items.map(x => x.id.toLowerCase()).includes(optKey.toLowerCase())) {
                    if (optGroup) {
                        _searchData.items.push({
                            id: optKey,
                            text: optValue,
                            optGroup: optGroup,
                            disabled: disabled
                        });
                    } else {
                        _searchData.items.push({
                            id: optKey,
                            text: optValue,
                            disabled: disabled
                        });
                    }
                }
                _selectField.dispatchEvent(afterDelete);
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
                        ulElement.appendChild(createDeleteButton(optionElement.value, optionElement.innerText, optGroup.label, optionElement.disabled));
                    } else {
                        if (_bootstrapNiceSelect.searchData === undefined) {
                            _searchData.items.push({
                                id: optionElement.value,
                                text: optionElement.innerText,
                                optGroup: optGroup.label,
                                disabled: optionElement.disabled
                            });
                        }
                    }
                }
            }
        }

        let optGroupsNotAvailable = function () {
            for (let optionElement of _selectField.children) {
                if (optionElement.selected) {
                    ulElement.appendChild(createDeleteButton(optionElement.value, optionElement.innerText, undefined, optionElement.disabled));
                } else {
                    if (_bootstrapNiceSelect.searchData === undefined) {
                        _searchData.items.push({
                            id: optionElement.value,
                            text: optionElement.innerText,
                            disabled: optionElement.disabled
                        });
                    }
                }
            }
        }

        let ulElement = document.createElement("ul");
        ulElement.classList.add(...constants.CONSTANTS.classes.deleteContainerList);
        if (_bootstrapNiceSelect.scrollable.on) {
            ulElement.classList.add("scrollable");
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
        button.setAttribute("type", "button");
        if (_bootstrapNiceSelect.disabled) {
            button.setAttribute("disabled", 'disabled');
        }
        button.addEventListener("click", function () {
            initOverlay();
            openOverlay();
            let input = document.querySelector(".bootstrap-nice-select-overlay div.search-container input");
            input.value = '';
            input.focus();
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
            let target = (event && event.target);
            if (target == this) {
                closeOverlay();
            }
        }

        let filterOnSearchInput = function () {
            if (_bootstrapNiceSelect.searchData === undefined) {
                let filter = this.value.toUpperCase();
                if (filter.length >= _bootstrapNiceSelect.minimumInputLength) {
                    hideMinimumInputLengthWarning();
                    refreshSearchList();
                } else {
                    document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                    showMinimumInputLengthWarning(_bootstrapNiceSelect.minimumInputLength - filter.length);
                    return;
                }
                let liNodes = document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").getElementsByTagName("li");
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
                if (filter.length < _bootstrapNiceSelect.minimumInputLength) {
                    document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                    showMinimumInputLengthWarning(_bootstrapNiceSelect.minimumInputLength - filter.length);
                    return;
                }
                hideMinimumInputLengthWarning();
                getRemoteSearchData(filter);
            }
        }

        let keyboardInteraction = function (event) {

            let allowTagsInputInteraction = function (keyValue) {

                const afterAdd = new CustomEvent("inserted.bs.bootstrap-nice-select", {
                    detail: {
                        key: keyValue,
                        value: keyValue
                    }
                });

                let checkTagBeforeCreation = function () {
                    if (_bootstrapNiceSelect['tagsCheck'] instanceof Function || typeof _bootstrapNiceSelect['tagsCheck'] === 'function') {
                        let possiblePromiseBoolean = _bootstrapNiceSelect['tagsCheck'](keyValue);
                        Promise.resolve(possiblePromiseBoolean).then(boolResult => {
                            return boolResult;
                        });
                    }
                    if (_bootstrapNiceSelect['tagsCheck'] instanceof String || typeof _bootstrapNiceSelect['tagsCheck'] === 'string') {
                        let possiblePromiseBoolean = utils.executeFunctionByName(_bootstrapNiceSelect['tagsCheck'], window, keyValue);
                        Promise.resolve(possiblePromiseBoolean).then(boolResult => {
                            return boolResult;
                        });
                    }
                    return true;
                }

                if (_bootstrapNiceSelect.tokenSeparators.includes(event.key)) {
                    if (!checkTagBeforeCreation()) {
                        console.error(`Can not create option with value '${keyValue}' because of given check function...`);
                        return;
                    }
                    let optionAlreadyCreatedBefore = _selectField.querySelector(`option[value="${keyValue}"]`);
                    if (optionAlreadyCreatedBefore) {
                        optionAlreadyCreatedBefore.setAttribute("selected", 'selected');
                    } else {
                        let newOption = document.createElement("option");
                        newOption.value = keyValue;
                        newOption.innerText = keyValue;
                        newOption.setAttribute("selected", 'selected');
                        _selectField.appendChild(newOption);
                    }
                    if (!_selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list button[data-id="${keyValue}"]`)) {
                        let newDeleteButton = createDeleteButton(keyValue, keyValue, undefined, false);
                        _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(newDeleteButton);
                    }
                    closeOverlay();
                    _selectField.dispatchEvent(afterAdd);
                }
            }

            if (_bootstrapNiceSelect.searchData === undefined) {
                if (event.key === "Tab" || event.key === "ArrowDown") {
                    event.preventDefault();
                    let liElements = document.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li:not(.hidden)");
                    if (liElements.length > 0) {
                        liElements.forEach(element => element.tabIndex = -1);
                        liElements[0].tabIndex = 0;
                        _currentLi = 0;
                        liElements[0].focus();
                    }
                };
            } else {
                if (event.key === "Tab" || event.key === "ArrowDown") {
                    event.preventDefault();
                    let liElements = document.querySelectorAll(".bootstrap-nice-select-overlay div.search-container ul li");
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
        searchInput.addEventListener("input", filterOnSearchInput);
        searchInput.addEventListener('keydown', keyboardInteraction);
        searchInput.addEventListener("focusin", function () {
            document.querySelector('.bootstrap-nice-select-overlay div.search-container span.focus-border').classList.add("active");
        });
        searchInput.addEventListener("focusout", function () {
            document.querySelector('.bootstrap-nice-select-overlay div.search-container span.focus-border').classList.remove("active");
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
            let index = _bootstrapNiceSelect.tokenSeparators.indexOf(" ");
            let copySeparators = _bootstrapNiceSelect.tokenSeparators.slice();
            if (index > -1) {
                copySeparators.splice(index, 1);
                copySeparators.push("Spacebar");
            }
            tooltip.append(...utils.htmlToElements(`${constants.LOCALISATION[_bootstrapNiceSelect.locale].formatHelpForTagging()}<br/>${copySeparators.join("<br/>")}`));
            searchInputWrapper.appendChild(tagIcon);
        }
        search.appendChild(searchInputWrapper);
        if (_bootstrapNiceSelect.minimumInputLength > 0) {
            let minimumInputLengthWrapper = document.createElement("div");
            minimumInputLengthWrapper.classList.add(...constants.CONSTANTS.classes.minimumInputLengthContainer);
            minimumInputLengthWrapper.innerText = constants.LOCALISATION[_bootstrapNiceSelect.locale].formatInputToShort(_bootstrapNiceSelect.minimumInputLength);
            search.appendChild(minimumInputLengthWrapper);
        }
        let focusHr = document.createElement("span");
        focusHr.classList.add(...constants.CONSTANTS.classes.searchHrFocus);
        search.appendChild(focusHr);
        let hr = document.createElement("span");
        hr.classList.add(...constants.CONSTANTS.classes.searchHr);
        search.appendChild(hr);
        search.appendChild(initSearchList());
        divWrapper.appendChild(search);
        overlayElement.appendChild(divWrapper);
        document.querySelector("body").appendChild(overlayElement);
    }

    let syncViaHtml = function () {
        if (_selectField.hasAttribute("disabled")) {
            _bootstrapNiceSelect.disabled = true;
        }
        if (_selectField.hasAttribute('multiple')) {
            _bootstrapNiceSelect.multiple = true;
        } else {
            _bootstrapNiceSelect.multiple = false;
            if (!_selectField.querySelector('option[selected]')) {
                _selectField.selectedIndex = "-1";
                for (let option of _selectField) {
                    option.selected = false;
                }
            }
        }
        if (_selectField.hasAttribute('data-tags')) {
            if (_selectField.getAttribute('data-tags') === '') {
                _bootstrapNiceSelect.tags = true;
            } else {
                _bootstrapNiceSelect.tags = (_selectField.getAttribute('data-tags') === 'true');
            }
        }
        if (_selectField.getAttribute("data-locale")) {
            _bootstrapNiceSelect.locale = _selectField.getAttribute("data-locale");
        }
        if (_selectField.getAttribute("data-minimum-input-length")) {
            _bootstrapNiceSelect.minimumInputLength = parseInt(_selectField.getAttribute("data-minimum-input-length"), 10);
        }
        if (_selectField.getAttribute("data-search-data")) {
            _bootstrapNiceSelect.searchData = _selectField.getAttribute("data-search-data");
        }
        if (_selectField.getAttribute("data-theme")) {
            _bootstrapNiceSelect.theme = _selectField.getAttribute("data-theme");
        }
        if (_selectField.hasAttribute("data-scrollable-on")) {
            if (_selectField.getAttribute('data-scrollable-on') === '') {
                _bootstrapNiceSelect.scrollable.on = true;
            } else {
                _bootstrapNiceSelect.scrollable.on = (_selectField.getAttribute("data-scrollable-on") === 'true');
            }
            _bootstrapNiceSelect.scrollable.height = _selectField.getAttribute("data-scrollable-height");
        }
        if (_selectField.hasAttribute("data-animation")) {
            if (_selectField.getAttribute('data-animation') === '') {
                _bootstrapNiceSelect.animation = true;
            } else {
                _bootstrapNiceSelect.animation = (_selectField.getAttribute("data-animation") === 'true');
            }
        }
        if (_selectField.getAttribute("data-tags-check")) {
            _bootstrapNiceSelect.tagsCheck = _selectField.getAttribute("data-tags-check");
        }
        if (_selectField.getAttribute("data-token-separators")) {
            _bootstrapNiceSelect.tokenSeparators = JSON.parse(_selectField.getAttribute("data-token-separators"));
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

    let _selectField = null;
    // private params, which should be not accessible via the public object
    if (typeof selector === 'string' || selector instanceof String) {
        _selectField = document.querySelector(selector);
    } else {
        _selectField = selector;
    }
    _selectField.setAttribute("hidden", 'hidden');
    let _currentLi = 0;
    let _searchData = {
        items: []
    };

    const _bootstrapNiceSelect = Object.create(bootstrap_nice_select_nl_NL_DEFAULTS);

    // sync options
    syncViaHtml();
    syncViaJavascript();

    // init HTMLElement and inject it to DOM
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

    _selectField.parentNode.insertBefore(main, _selectField.nextSibling);

    // Add programmatic control
    _bootstrapNiceSelect.bootstrapNiceSelect = function (functionName, ...args) {
        switch (functionName) {
            case 'select':
                if (args.length === 0) {
                    console.error("No given option to select something for method 'select'. Please read the manual how to use the function...");
                    break;
                }
                for (let arg of args) {
                    const afterAdd = new CustomEvent("inserted.bs.bootstrap-nice-select", {
                        detail: {
                            key: arg.id,
                            value: arg.text
                        }
                    });
                    if (!_bootstrapNiceSelect.multiple) {
                        let deleteLiElements = _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').getElementsByTagName("li");
                        for (let i = 0; (li = deleteLiElements[i]); i++) {
                            li.parentNode.removeChild(li);
                        }
                        let oldSelectedOption = _selectField.querySelector('option[selected]');
                        if (oldSelectedOption) {
                            oldSelectedOption.removeAttribute("selected");
                        }
                    }
                    let option = _selectField.querySelector(`option[value="${arg.id}"]`);
                    if (option) {
                        option.setAttribute("selected", 'selected');
                    } else {
                        let newOption = document.createElement("option");
                        newOption.value = arg.id;
                        newOption.innerText = arg.text;
                        newOption.setAttribute("selected", 'selected');
                        _selectField.appendChild(newOption);
                    }
                    if (_selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list button[data-id="${arg.id}"]`)) {
                        continue;
                    }
                    if (arg.optGroup) {
                        let deleteButton = createDeleteButton(arg.id, arg.text, arg.optGroup, (arg.disabled) ? arg.disabled : false);
                        let selectedHeader = _selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list h5[data-optgroup=${arg.optGroup}]`);
                        if (selectedHeader) {
                            selectedHeader.insertAdjacentElement('afterend', deleteButton);
                        } else {
                            let newHeader = document.createElement("h5");
                            newHeader.classList.add(...constants.CONSTANTS.classes.deleteContainerHeader);
                            newHeader.innerHTML = arg.optGroup;
                            newHeader.setAttribute("data-optgroup", arg.optGroup);
                            _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(newHeader);
                            _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(deleteButton);
                        }
                    } else {
                        let deleteButton = createDeleteButton(arg.id, arg.text, undefined, (arg.disabled) ? arg.disabled : false);
                        _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(deleteButton);
                    }
                    _selectField.dispatchEvent(afterAdd);
                }
                break;
            case 'deselect':
                if (args.length === 0) {
                    console.error("No given option to deselect something for method 'deselect'. Please read the manual how to use the function...");
                    break;
                }
                for (let arg of args) {
                    let foundedButton = _selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list li button[data-id="${arg}"]`);
                    if (!foundedButton) {
                        console.error(`Could not deselect given option "${arg}", because could not trigger click event for respective delete button...`);
                        continue;
                    }
                    foundedButton.click();
                }
                break;
            case 'selectAll':
                if (!_bootstrapNiceSelect.multiple) {
                    console.error("Method 'selectAll' should not be used for a select field without 'multiple' property because it does not make sense if you can only select one. Please use method 'select' instead...");
                    break;
                }
                if (_bootstrapNiceSelect.searchData) {
                    args.length > 0 ? getRemoteSearchData(args[0]) : getRemoteSearchData("");
                }
                for (let searchOption of _searchData.items) {
                    const afterAdd = new CustomEvent("inserted.bs.bootstrap-nice-select", {
                        detail: {
                            key: searchOption.id,
                            value: searchOption.text
                        }
                    });
                    let option = _selectField.querySelector(`option[value="${searchOption.id}"]`);
                    if (option) {
                        option.setAttribute("selected", 'selected');
                    } else {
                        let newOption = document.createElement("option");
                        newOption.value = searchOption.id;
                        newOption.innerText = searchOption.text;
                        newOption.setAttribute("selected", 'selected');
                        _selectField.appendChild(newOption);
                    }
                    if (_selectField.nextElementSibling.querySelector(`.bootstrap-nice-select ul.delete-list button[data-id="${searchOption.id}"]`)) {
                        continue;
                    }
                    if (searchOption.optGroup) {
                        let deleteButton = createDeleteButton(searchOption.id, searchOption.text, searchOption.optGroup, (searchOption.disabled) ? searchOption.disabled : false);
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
                        let deleteButton = createDeleteButton(searchOption.id, searchOption.text, undefined, (searchOption.disabled) ? searchOption.disabled : false);
                        _selectField.nextElementSibling.querySelector('.bootstrap-nice-select ul.delete-list').appendChild(deleteButton);
                    }
                    _selectField.dispatchEvent(afterAdd);
                }
                break;
            case 'deselectAll':
                let foundedButtons = _selectField.nextElementSibling.querySelectorAll(".bootstrap-nice-select ul.delete-list li button");
                for (let foundedButton of foundedButtons) {
                    foundedButton.click();
                }
                break;
            case 'destroy':
                _selectField.nextElementSibling.remove();
                _selectField.removeAttribute("hidden");
                break;
            case 'show':
                if (_bootstrapNiceSelect.animation) {
                    _selectField.nextElementSibling.classList.remove("fade-out-down");
                    _selectField.nextElementSibling.classList.add("fade-in-down");
                } else {
                    _selectField.nextElementSibling.style.opacity = "1";
                }
                break;
            case 'hide':
                if (_bootstrapNiceSelect.animation) {
                    _selectField.nextElementSibling.classList.remove("fade-in-down");
                    _selectField.nextElementSibling.classList.add("fade-out-down");
                } else {
                    _selectField.nextElementSibling.style.opacity = "0";
                }
                break;
            case 'open':
                initOverlay();
                openOverlay();
                let input = document.querySelector(".bootstrap-nice-select-overlay div.search-container input");
                if (args.length > 0) {
                    input.value = args[0];
                    input.dispatchEvent(new Event('input'));
                } else {
                    input.value = '';
                }
                input.focus();
                break;
            case 'close':
                document.querySelector(".bootstrap-nice-select-overlay div.search-container ul").classList.remove("active");
                closeOverlay();
                break;
        }
    };

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

/*
 *  Bootstrap Nice Select Dutch (Netherlands) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/

(function (locales) {
    locales['nl-NL'] = locales['nl'] = {
        formatSearch() {
            return "Zoekopdracht...";
        },
        formatHelpForTagging() {
            return "Om uw eigen tags te maken, focust u zich op het invoerveld en klikt u op een van de volgende knoppen om het object te maken:";
        },
        formatInputToShort(remainingChars) {
            return 'Gelieve ' + remainingChars + ' of meer karakters in te voeren';
        }
    }
    bootstrap_nice_select_nl_NL_DEFAULTS.locale = "nl-NL";
})(constants.LOCALISATION);
/******/ 	return __webpack_exports__;
/******/ })()
;
});