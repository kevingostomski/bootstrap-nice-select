## **v1.1.3 (2023-05-02)**

### **Fixed**

- Invisble add/delete button on :active & :focus selector is now visible

# **v1.1.2 (2023-05-02)**

Because of wrong usage of `npm publish`, release v1.1.1 is skipped

### **Fixed**

- Issue [#15](https://github.com/kevingostomski/bootstrap-nice-select/issues/15) - Screen resizing fix for buttons on small screen
- Issue [#10](https://github.com/kevingostomski/bootstrap-nice-select/issues/10) - Button shadow colors are inheritable and can be created on your own via SASS variables

# **v1.1.0 (2023-04-27)**

### **Added**

- Added more languages for localization
- Finished release of [Homepage](https://kevingostomski.github.io/bootstrap-nice-select/) 
- Added [#3](https://github.com/kevingostomski/bootstrap-nice-select/issues/3) - component is now mobile responsive
- Adding `disabled` feature

### **Fixed**

- Initialization from HTML fixed
- Update README.md and markdown files

### **Changed**

- Margin and Padding is now better setted so it looks nicer
- `afterAdd` and `afterDelete` options are now [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent), which need to be added to the select `selector` HTML object so they get dispatched/triggered on the right time (normally v2.0 release because of not backwards compatible manner but because nobody uses the component currently, version will just be inreased as MINOR release)


# **v1.0.1 (2023-04-19)**

First release of the `bootstrap-nice-select` component.

### **Added**

- Automatic class selection for Bootstrap 4 & 5 
- Modern looking scrollable select list option
- Fully skinnable, CSS built with SASS 
- Localization - english and german
- Get data in JSON format using AJAX/Fetch and have them searchable via functionName or callback function
- Allow users to type in new options and add it on the fly via tagging option
- Setting own icons option to override possible themes
- `AfterAdd` and `AfterDelete` options for callback function which will be automatically called after the event listeners