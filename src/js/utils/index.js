export default {
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
    },
    /**
     * fire the callback after the action has finished for the defined amount of time
     * @param {Function} callback function the get called
     * @param {Number} wait definded amount of time to wait in ms
     * @returns result of callback function
     */
    debounce(callback, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () { callback.apply(this, args); }, wait);
        };
      }
}