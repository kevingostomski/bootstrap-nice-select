---
layout: "documentation-options"
permalink: "documentation/options"
---

# Select Options

#### The Select Options API of Bootstrap-Nice-Select

---

&nbsp;

## **disabled**

- **Attribute:** `disabled="disabled"`
- **Type:** `String`
- **Detail:**
  You can disable the whole `<select>` component so you can not add or delete already selected `<option>` tags. You can also disable single `<option>` tags to add them and make them unremovable.
  Works with `data-search-data` - JSON format needs to be expanded with `disabled: true` as attribute for a single `item`. Default is `disabled: false` and does not need to be added.
- **Default:** `undefined`
- **Example:** [From HTML]({% link sites/examples/initialization/from-html.markdown %})

&nbsp;

&nbsp;

## **init**

- **Attribute:** `data-bs-toggle`
- **Type:** `String`
- **Detail:**
  Activate bootstrap-nice-select without writing JavaScript.
- **Default:** `'bootstrap-nice-select'`
- **Example:** [From HTML]({% link sites/examples/initialization/from-html.markdown %})

&nbsp;

&nbsp;

## **icons**

- **Attribute:** `icons`
- **Type:** `Object`
- **Detail:**
  Set own custom icons via Javascript for the placeholder icons.
- **Default:** 
  
<div class="mb-4">
{% highlight javascript %}
{
    search: '<i class="fa-solid fa-magnifying-glass"></i>',
    delete: '<i class="fa-solid fa-trash"></i>',
    add: '<i class="fa-solid fa-plus"></i>',
    tag: '<i class="fa-solid fa-circle-exclamation"></i>'
}
{% endhighlight %}
</div>

- **Example:** [Icons]({% link sites/examples/options/icons.markdown %})

&nbsp;

&nbsp;

## **locale**

- **Attribute:** `data-locale`
- **Type:** `String`
- **Detail:**
  Sets the locale to use (i.e. `'de-DE'`). Locale files currently all inside file and do not need to be pre-loaded. If left `undefined`, an empty string or a locale which is not allowed, errors are thrown. 
- **Default:** `'en-US'`
- **Example:** [Locale]({% link sites/examples/options/locale.markdown %})

&nbsp;

&nbsp;

## **scrollable**

#### **on**
- **Attribute:** `data-scrollable-on`
- **Type:** `Boolean`
- **Detail:**
  Set `true` to enable virtual scroll to display a virtual, "infinite" list. Needs `data-scrollable-height` to be set to work.
- **Default:** `false`
- **Example:** [Scrollable]({% link sites/examples/options/scrollable.markdown %})

&nbsp;

&nbsp;

#### **height**
- **Attribute:** `data-scrollable-height`
- **Type:** `String`
- **Detail:**
  Set a valid CSS `height` to display a virtual, "infinite" list. Needs `data-scrollable-on` to be set to work. 
- **Default:** `undefined`
- **Example:** [Scrollable]({% link sites/examples/options/scrollable.markdown %})

&nbsp;

&nbsp;

## **searchData**

- **Attribute:** `data-search-data`
- **Type:** `String` &#124; `Function`
- **Detail:**
  Used to load the select field data for adding new items. The function needs to return elements in a specific JSON format to work properly.
- **Default:** `undefined`
- **Example:** [Remote Data]({% link sites/examples/options/searchData.markdown %})

&nbsp;

&nbsp;

## **tags**

- **Attribute:** `data-tags`
- **Type:** `Boolean`
- **Detail:**
  Set `true` to enable dynamic item creation on input search field with pressing "Enter", "," or "Spacebar".
- **Default:** `false`
- **Example:** [Tagging]({% link sites/examples/options/tags.markdown %})

&nbsp;

&nbsp;

## **theme**

- **Attribute:** `data-theme`
- **Type:** `String`
- **Detail:**
  Set an allowed theme: 
  - [font-awesome-6](https://fontawesome.com/search)
  - [font-awesome-5](https://fontawesome.com/v5/search)
  - [font-awesome-4](https://fontawesome.com/v4/icons/)
  - [material-icons](https://materializecss.com/icons.html)
  - [bi](https://icons.getbootstrap.com/)
- **Default:** `'font-awesome-6'`
- **Example:** [Theme]({% link sites/examples/options/theme.markdown %})