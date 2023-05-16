---
layout: "examples"
permalink: "examples/options/tagsCheck"
selected: "TagsCheck"
description: "Example how to set the 'tagsCheck' option of Bootstrap-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - TagsCheck]"
---

# **Constraining Tag Creation**

---

Use `tagsCheck` option via JavaScript or `data-tags-check` via attribute to add some logic to the select field to return a `Boolean` if an invalid value is entered. You can use the name of a function to set the option or a callback function. 

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="option-tagscheck" multiple="multiple">
                <option value="Apple" selected="selected">Apple</option>
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
function checkTag(key) {
    if (key.toLowerCase().includes("ä") || key.toLowerCase().includes("ö") || key.toLowerCase().includes("ü")) {
        return false;
    }
    return true;
}

let select = bootstrapNiceSelect.BootstrapNiceSelect("#my-select", {tagsCheck: 'checkTag', tags: true});
{% endhighlight %}
    </div>
</div>
