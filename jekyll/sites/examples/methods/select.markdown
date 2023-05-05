---
layout: "examples"
permalink: "examples/methods/select"
selected: "Select"
description: "Example for methods to select or deselect elements of Bootstrap-Nice-Select - Gives an overview how to use the methods and how it looks like"
title: "Examples [Methods - Select]"
---

# **Select**

---
The methods 
- `.bootstrapNiceSelect('select', item1, item2, item3, ...)`
- `.bootstrapNiceSelect('selectAll')` 
- `.bootstrapNiceSelect('deselect', item1, item2, ...)` 
- `.bootstrapNiceSelect('deselectAll')` 

can be used to manually create or delete available `<option>` tags like the following example:

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="d-flex justify-content-start align-items-center m-4">
        <button type="button" class="btn btn-outline-primary me-2" id="methods-select-select">select Apple, Lemon, Garlic</button>
        <button type="button" class="btn btn-outline-primary mx-2" id="methods-select-select-all">select all</button>
        <button type="button" class="btn btn-outline-primary mx-2" id="methods-select-deselect">deselect Lemon, Cabbages</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="methods-select-deselect-all">deselect all</button>
    </div>
    <div class="p-5 border-bottom">
        <select multiple="multiple" id="methods-select">
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
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <div class="d-flex justify-content-start align-items-center m-4">
        <button type="button" class="btn btn-outline-primary me-2" id="select-select-select">select Apple, Lemon, Garlic</button>
        <button type="button" class="btn btn-outline-primary mx-2" id="select-select-select-all">select all</button>
        <button type="button" class="btn btn-outline-primary mx-2" id="select-select-deselect">deselect Lemon, Cabbages</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="select-select-deselect-all">deselect all</button>
    </div>
    <select multiple="multiple" id="select-select">
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
</div>
{% endhighlight %}
<hr>
{% highlight javascript %}

let select = bootstrapNiceSelect.BootstrapNiceSelect("#select-select");

document.querySelector("#select-select-select").addEventListener("click", function () {
    select.bootstrapNiceSelect("select", {id: "Apple", text:"Apple"},{id: "Lemon", text:"Lemon"},{id: "Garlic", text:"Garlic"});
});

document.querySelector("#select-select-select-all").addEventListener("click", function () {
    select.bootstrapNiceSelect("selectAll");
});

document.querySelector("#select-select-deselect").addEventListener("click", function () {
    select.bootstrapNiceSelect("deselect", "Lemon", "Cabbages");
});

document.querySelector("#select-select-deselect-all").addEventListener("click", function () {
    select.bootstrapNiceSelect("deselectAll");
});
{% endhighlight %}
    </div>
</div>