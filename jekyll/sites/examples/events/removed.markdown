---
layout: "examples"
permalink: "examples/events/removed"
selected: "AfterRemoving"
---

# **Removed**

---
Bootstrap-Nice-Select exposes a few events for hooking into select functionality. The `removed.bs.bootstrap-nice-select` event listener fires immediately after an option will be removed from the `<select>` field.

| Key | Description |
| --- | --- |
| `e.detail.key` | The Key or rather the setted `value` for the `<option>` element which will be removed. |
| `e.detail.value` | The Value or rather the setted `innerText` for the `<option>` element which will be removed. |

&nbsp;

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select multiple="multiple" data-bs-toggle="bootstrap-nice-select" id="event-removed">
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

document.querySelector("#my-select").addEventListener("removed.bs.bootstrap-nice-select", function (e) {
    alert(`REMOVED = Key: '${e.detail.key}' | Text: '${e.detail.value}'`);
});

{% endhighlight %}
    </div>
</div>