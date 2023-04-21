---
layout: "usage"
permalink: "getting-started/usage"
---

# Usage

#### The Bootstrap-Nice-Select plugin displays data in a modern format, via data attributes or JavaScript.

---

&nbsp;

## **Via data attributes**

{% highlight html %}
<select data-bs-toggle="bootstrap-nice-select">
    <option value="Banana">Banana</option>
    <option value="Apple">Apple</option>
    <option value="Orange">Orange</option>
    <option value="Lemon">Lemon</option>
    <option value="Pepper">Pepper</option>
    <option value="Mushrooms">Mushrooms</option>
    <option value="Cabbages">Cabbages</option>
    <option value="Celery">Celery</option>
    <option value="Garlic">Garlic</option>
    <option value="Brocoli">Brocoli</option>
</select>
{% endhighlight %}

For pre-selecting options you can use `selected="selected"` or for multiple select, you can use `multiple="multiple"`.

{% highlight html %}
<select data-bs-toggle="bootstrap-nice-select" multiple="multiple">
    <option value="Banana">Banana</option>
    <option value="Apple">Apple</option>
    <option value="Orange">Orange</option>
    <option value="Lemon" selected="selected">Lemon</option>
    <option value="Pepper">Pepper</option>
    <option value="Mushrooms">Mushrooms</option>
    <option value="Cabbages">Cabbages</option>
    <option value="Celery">Celery</option>
    <option value="Garlic">Garlic</option>
    <option value="Brocoli">Brocoli</option>
</select>
{% endhighlight %}

You can even use `<optgroup>` tags to render options in a group and search for group texts in the items search overlay field.

{% highlight html %}
<select data-bs-toggle="bootstrap-nice-select" multiple="multiple">
    <optgroup label="Fruit">
        <option value="Banana" selected="selected">Banana</option>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Lemon">Lemon</option>
    </optgroup>
    <optgroup label="Vegetable">
        <option value="Pepper">Pepper</option>
        <option value="Mushrooms">Mushrooms</option>
        <option value="Cabbages" selected="selected">Cabbages</option>
        <option value="Celery">Celery</option>
        <option value="Garlic">Garlic</option>
        <option value="Brocoli">Brocoli</option>
    </optgroup>
</select>
{% endhighlight %}

Currently, remote URL data is only supported through the initialization through JavaScript but the support for data attributes will be added in the upcoming release.

&nbsp;

## **Via JavaScript**

Call a bootstrap-nice-select field with an `id` or `class`.

{% highlight html %}
<select id="my-select"></select>
{% endhighlight %}

{% highlight javascript %}
let select = bootstrapNiceSelect.BootstrapNiceSelect("#my-select");
{% endhighlight %}

For setting available options, create a javascript object and append it to the initialization. You can set something like the `locale` option, the `scrollable` feature or many more.

{% highlight javascript %}
let select = bootstrapNiceSelect.BootstrapNiceSelect("#my-select", {
    locale: "de",
    tags: true,
    ...
});
{% endhighlight %}

For using remote URL data, give the option the function name you created or a callback function and return the data in JSON format. When using remote URL data, predefined options
which are not already `selected="selected"` are ignored but the select field need bo be HTML5 conform, if your JSON data is using `<optgroup>` tags.
{% highlight javascript %}
let dbData = {
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
    // put AJAX or Fetch for Remote JSON object here and use the filter string to only return items searched
    let toRet = structuredClone(dbData);
    toRet.items = toRet.items.filter(data => data.text.toUpperCase().indexOf(filter) > -1);
    return toRet;
}

let select = bootstrapNiceSelect.BootstrapNiceSelect("#my-select", {
    searchData: 'callRemoteData'
});
{% endhighlight %}

&nbsp;