---
layout: "examples"
permalink: "examples/options/searchData"
selected: "SearchData"
description: "Example how to set the 'searchData' option of Bootstrap-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - SearchData]"
---

# **Search Data**

---

Use `searchData` option via JavaScript or `data-search-data` via attribute to load the select field data. For predefined `<option>` tags, you need to add them in HTML. If data is already added, it will be silently skipped and nothing will happen. You can use the name of a function to set the option or a callback function. 

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="option-searchdata" multiple="multiple">
            <optgroup label="Fruit">
                <option value="Apple" selected="selected">Apple</option>
            </optgroup>
        </select>
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <select id="my-select" multiple="multiple">
        <option value="Apple" selected="selected">Apple</option>
    </select>
</div>
{% endhighlight %}
<hr>
{% highlight javascript %}
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

let select = bootstrapNiceSelect.BootstrapNiceSelect("#my-select", {searchData: 'callRemoteData'});
{% endhighlight %}
    </div>
</div>
