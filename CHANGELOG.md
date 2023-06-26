# **v1.4.0 (2023-06-26)**

### **Fixed**

- Issue [#27](https://github.com/kevingostomski/bootstrap-nice-select/issues/27) - Make remote call (AJAX/FETCH) workable with async/await with the help of `Promise.resolve()`
- Issue [#29](https://github.com/kevingostomski/bootstrap-nice-select/issues/29) - Fix sending form on 'Enter' event on trying to add item

### **Added**

- Issue [#26](https://github.com/kevingostomski/bootstrap-nice-select/issues/26) - Input can no be the already selected HTML Dom `>select>` object so you do not need to give a CSS selector
- Issue [#28](https://github.com/kevingostomski/bootstrap-nice-select/issues/28) - Added new parameter for a minimum input length on popup search named `minimumInputLength`

&nbsp;

# **v1.3.0 (2023-05-16)**

Normally **v2.0** release because of not backwards compatible manner of the standard file if someone is using the locale feature. Nethertheless the component currently is relatively new. That`s why the version will just be inreased as *MINOR release* and *NOT MAYOR release*.

### **Fixed**

- Issue [#20](https://github.com/kevingostomski/bootstrap-nice-select/issues/20) - Keyboard accessibility updated on `<input>` tag. Same functionality on key `ArrowDown` like key `Tab` added, which normally exists for search popup containers with list styles
- Issue [#22](https://github.com/kevingostomski/bootstrap-nice-select/issues/22) - You do not need to set `multiple="multiple"` or `hidden="hidden"` anymore. Only setting `hidden` or `multiple` is enough now. Browsers already using this and it is now supported because of conformity and standardization
- Issue [#23](https://github.com/kevingostomski/bootstrap-nice-select/issues/23) - Tagging box got a new position so on screen resize it is still readable. Fixed for better mobile responsiveness

### **Added**

- Issue [#19](https://github.com/kevingostomski/bootstrap-nice-select/issues/19) - Tags creation can now be constrained with the help of the option `tagsCheck` which needs a function to return a `Boolean`
- Support to override option `tokenSeparators`. This was already possible when using JavaScript initialization and you know that this property existed. Is is now possible via data attributes too and is getting documented. The tagging helper text got updated to so it represents the possible token separators
- Issue [#24](https://github.com/kevingostomski/bootstrap-nice-select/issues/24) - Animation added for the overlay container (popup window) which can now be disabled via `data-animation`

### **Changed**

- Issue [#21](https://github.com/kevingostomski/bootstrap-nice-select/issues/21) - i18n (localisation) is rewritten. One `js` file per possible locale is added which is using the selected language. The currently used standard file is only supporting `en`. Added a file `bootstrap-nice-select-locale-all.js` with all locales like the old one which used `en` as default language
- Property `data-animation` triggers now if animation exists for overlay and programmatic control functions

&nbsp;

# **v1.2.3 (2023-05-09)**

### **Fixed**

- `Spacebar` characters are the reason why on special tagging elements the CSS selector keeps breaking. Fix is now added

&nbsp;

# **v1.2.2 (2023-05-09)**

### **Fixed**

- Issue [#18](https://github.com/kevingostomski/bootstrap-nice-select/issues/18) - no tag creation on pressing `Enter` or `Spacebar`

&nbsp;

# **v1.2.1 (2023-05-09)**

### **Fixed**

- Issue [#17](https://github.com/kevingostomski/bootstrap-nice-select/issues/17) - when using inside form, it does not get submitted directly anymore if clicking on an add button or delete button

&nbsp;

# **v1.2.0 (2023-05-05)**

### **Fixed**

- Use actual setted `disabled` property from item when given and not just decide, if it exists or not

### **Added**

- Programmatic control - Methods API documentation added with examples how to use them
- added new option `animation` as default `true` if `hide()` or `show()` API method is called

&nbsp;

# **v1.1.3 (2023-05-02)**

### **Fixed**

- Invisble add/delete button on :active & :focus selector is now visible

&nbsp;

# **v1.1.2 (2023-05-02)**

Because of wrong usage of `npm publish`, release v1.1.1 is skipped

### **Fixed**

- Issue [#15](https://github.com/kevingostomski/bootstrap-nice-select/issues/15) - Screen resizing fix for buttons on small screen
- Issue [#10](https://github.com/kevingostomski/bootstrap-nice-select/issues/10) - Button shadow colors are inheritable and can be created on your own via SASS variables

&nbsp;

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

&nbsp;

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