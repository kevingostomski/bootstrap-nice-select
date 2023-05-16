let remoteSearchData = {
    items: [
        {
            id: "Banana",
            text: "Banana",
            optGroup: "Fruit"
        },
        {
            id: "Apple",
            text: "Apple",
            optGroup: "Fruit"
        },
        {
            id: "Orange",
            text: "Orange",
            optGroup: "Fruit"
        },
        {
            id: "Pepper",
            text: "Pepper",
            optGroup: "Vegetable"
        },
        {
            id: "Garlic",
            text: "Garlic",
            optGroup: "Vegetable"
        }
    ]
}

function callRemoteData(filter) {
    filter = filter.toUpperCase();
    // put AJAX or Fetch for Remote JSON object here
    let toRet = structuredClone(remoteSearchData);
    toRet.items = toRet.items.filter(data => data.text.toUpperCase().indexOf(filter) > -1);
    return toRet;
}

function checkTag(key) {
    if (key.toLowerCase().includes("ä") || key.toLowerCase().includes("ö") || key.toLowerCase().includes("ü")) {
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function () {

    // Generate CopyToClipBoard Button for Code Blocks
    let clipBoardButton = function () {
        let divWrapper = document.createElement("div");
        divWrapper.classList.add("bd-clipboard");
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "tooltip");
        button.setAttribute("data-bs-title", "Copy to clipboard");
        button.classList.add("btn-clipboard");
        button.addEventListener("click", async function () {
            button.querySelector("i").classList.replace("fa-regular", "fa-solid");
            button.querySelector("i").classList.replace("fa-clipboard", "fa-check");
            let tooltip = bootstrap.Tooltip.getInstance(button);
            let code = button.parentElement.nextElementSibling.querySelector("code");
            await navigator.clipboard.writeText(code.innerText);
            tooltip.setContent({ '.tooltip-inner': 'Copied!' });
            setTimeout(function () {
                button.querySelector("i").classList.replace("fa-solid", "fa-regular");
                button.querySelector("i").classList.replace("fa-check", "fa-clipboard");
                tooltip.setContent({ '.tooltip-inner': 'Copy to clipboard' });
                tooltip.hide();
            }, 1500);
        });
        let icon = document.createElement("i");
        icon.classList.add("fa-regular", "fa-clipboard");
        button.appendChild(icon);
        divWrapper.appendChild(button);
        return divWrapper;
    };

    let figures = document.querySelectorAll("figure.highlight");
    for (let figure of figures) {
        figure.parentNode.insertBefore(clipBoardButton(), figure);
    }

    // Activate Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Activate possible BootstrapNiceSelects

    if (document.querySelector("#from-javascript")) {
        bootstrapNiceSelect.BootstrapNiceSelect("#from-javascript");
    }

    if (document.querySelector("#option-searchdata")) {
        bootstrapNiceSelect.BootstrapNiceSelect("#option-searchdata", { searchData: 'callRemoteData' });
    }

    if (document.querySelector('#option-icons')) {
        bootstrapNiceSelect.BootstrapNiceSelect("#option-icons", {
            icons: {
                add: '<i class="material-icons">add</i>',
                search: '<i class="fa-solid fa-magnifying-glass"></i>',
                tag: '<i class="fa-solid fa-circle-exclamation"></i>',
                delete: '<i class="bi bi-trash"></i>'
            }
        });
    }

    if (document.querySelector('#option-scrollable')) {
        bootstrapNiceSelect.BootstrapNiceSelect("#option-scrollable", {
            scrollable: {
                on: 'true',
                height: '200px'
            }
        });
    }

    if (document.querySelector("#event-inserted")) {
        document.querySelector("#event-inserted").addEventListener("inserted.bs.bootstrap-nice-select", function (e) {
            alert(`ADDED = Key: '${e.detail.key}' | Text: '${e.detail.value}'`);
        });
    }

    if (document.querySelector("#event-removed")) {
        document.querySelector("#event-removed").addEventListener("removed.bs.bootstrap-nice-select", function (e) {
            alert(`REMOVED = Key: '${e.detail.key}' | Text: '${e.detail.value}'`);
        });
    }

    if (document.querySelector("#option-animation")) {
        let select = bootstrapNiceSelect.BootstrapNiceSelect("#option-animation");
        document.querySelector("#option-animation-hide").addEventListener("click", function () {
            select.bootstrapNiceSelect("hide");
        });
        document.querySelector("#option-animation-show").addEventListener("click", function () {
            select.bootstrapNiceSelect("show");
        });
    }

    if (document.querySelector("#methods-animation")) {
        let select = bootstrapNiceSelect.BootstrapNiceSelect("#methods-animation");
        document.querySelector("#methods-animation-hide").addEventListener("click", function () {
            select.bootstrapNiceSelect("hide");
        });
        document.querySelector("#methods-animation-show").addEventListener("click", function () {
            select.bootstrapNiceSelect("show");
        });
    }

    if (document.querySelector("#methods-destroy")) {
        let select = bootstrapNiceSelect.BootstrapNiceSelect("#methods-destroy");
        document.querySelector("#methods-destroy-destroy").addEventListener("click", function () {
            select.bootstrapNiceSelect("destroy");
        });
        document.querySelector("#methods-destroy-recreate").addEventListener("click", function () {
            select = bootstrapNiceSelect.BootstrapNiceSelect("#methods-destroy");
        });
    }

    if (document.querySelector("#methods-overlay")) {
        let select = bootstrapNiceSelect.BootstrapNiceSelect("#methods-overlay");
        document.querySelector("#methods-overlay-open").addEventListener("click", function () {
            select.bootstrapNiceSelect("open", "A");
        });
        document.querySelector("#methods-overlay-close").addEventListener("click", function () {
            select.bootstrapNiceSelect("close");
        });
    }

    if (document.querySelector("#methods-select")) {
        let select = bootstrapNiceSelect.BootstrapNiceSelect("#methods-select");
        document.querySelector("#methods-select-select").addEventListener("click", function () {
            select.bootstrapNiceSelect("select", { id: "Apple", text: "Apple" }, { id: "Lemon", text: "Lemon" }, { id: "Garlic", text: "Garlic" });
        });

        document.querySelector("#methods-select-select-all").addEventListener("click", function () {
            select.bootstrapNiceSelect("selectAll");
        });

        document.querySelector("#methods-select-deselect").addEventListener("click", function () {
            select.bootstrapNiceSelect("deselect", "Lemon", "Cabbages");
        });

        document.querySelector("#methods-select-deselect-all").addEventListener("click", function () {
            select.bootstrapNiceSelect("deselectAll");
        });
    }

    if (document.querySelector("#option-tagscheck")) {
        bootstrapNiceSelect.BootstrapNiceSelect('#option-tagscheck', { tagsCheck: 'checkTag', tags: true });
    }
});