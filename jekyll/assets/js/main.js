document.addEventListener("DOMContentLoaded", function () {


    // Generate CopyToClipBoard Button for Code Blocks
    let clipBoardButton = function () {
        let divWrapper = document.createElement("div");
        divWrapper.classList.add("bd-clipboard");
        let button = document.createElement("button");
        let tooltip = new bootstrap.Tooltip(button)
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
});