---
layout: "examples"
permalink: "examples/methods/overlay"
selected: "Overlay"
description: "Example for the methods 'Open' & 'Close' of Bootstrap-Nice-Select - Gives an overview how to use the methods and how it looks like"
title: "Examples [Methods - Open & Close]"
---

# **Overlay**

---
The methods `.bootstrapNiceSelect('open')` and `.bootstrapNiceSelect('close')` can be used to manual trigger events to open or close the overlay with the search container like the following:

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="d-flex justify-content-start align-items-center m-4">
        <button type="button" class="btn btn-outline-primary me-2" id="methods-overlay-open">open</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="methods-overlay-close">close</button>
    </div>
    <div class="p-5 border-bottom">
        <select multiple="multiple" id="methods-overlay">
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
        <button type="button" class="btn btn-outline-primary me-2" id="select-overlay-open">open</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="select-overlay-close">close</button>
    </div>
    <select multiple="multiple" id="select-overlay">
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

let select = bootstrapNiceSelect.BootstrapNiceSelect("#select-overlay");

document.querySelector("#select-overlay-open").addEventListener("click", function () {
    select.bootstrapNiceSelect("open", "A");
});

document.querySelector("#select-overlay-close").addEventListener("click", function () {
    select.bootstrapNiceSelect("close");
});
{% endhighlight %}
    </div>
</div>