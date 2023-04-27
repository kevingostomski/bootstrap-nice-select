---
layout: "examples"
permalink: "examples/events/inserted"
selected: "AfterInserting"
---

# **Inserted**

---
Bootstrap-Nice-Select exposes a few events for hooking into select functionality. The `inserted.bs.bootstrap-nice-select` event listener fires immediately after a new option will be added to the `<select>` field.

| Key | Description |
| --- | --- |
| `e.detail.key` | The Key or rather the setted `value` for the `<option>` element which will be added. |
| `e.detail.value` | The Value or rather the setted `innerText` for the `<option>` element which will be added. |

&nbsp;

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select multiple="multiple" data-bs-toggle="bootstrap-nice-select" id="event-inserted">
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
    <select multiple="multiple" data-bs-toggle="bootstrap-nice-select" id="my-select">
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

document.querySelector("#my-select").addEventListener("inserted.bs.bootstrap-nice-select", function (e) {
    alert(`ADDED = Key: '${e.detail.key}' | Text: '${e.detail.value}'`);
});

{% endhighlight %}
    </div>
</div>