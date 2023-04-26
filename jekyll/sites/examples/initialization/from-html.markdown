---
layout: "examples"
permalink: "examples/initialization/from-html"
selected: "From-HTML"
---

# **Select from HTML**

---

Use `data-bs-toggle="bootstrap-nice-select"` to transform a select from an existing, unformat html select field for `multiple="multiple"` select field or a single select field. To size the created select field, wrap it with a `<div>` tag and set the `width` and `height` CSS style of it.

The overlay which will be shown when clicked on the add icon is keyboard navigable with the `Tab` key to switch between the input and the first founded option. In addition, the `Arrow` keys can be used to navigate through the founded options, when you want to add it to the list.

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

&nbsp;

#### Single Select

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
    <select data-bs-toggle="bootstrap-nice-select">
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
    <select data-bs-toggle="bootstrap-nice-select">
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
    </div>
</div>

&nbsp;

#### Multiple Select

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select multiple="multiple" data-bs-toggle="bootstrap-nice-select">
            <option value="Banana">Banana</option>
            <option value="Apple" selected="selected">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Lemon">Lemon</option>
            <option value="Pepper">Pepper</option>
            <option value="Mushrooms" selected="selected">Mushrooms</option>
            <option value="Cabbages">Cabbages</option>
            <option value="Celery">Celery</option>
            <option value="Garlic">Garlic</option>
            <option value="Brocoli">Brocoli</option>
        </select>
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <select multiple="multiple" data-bs-toggle="bootstrap-nice-select">
        <option value="Banana">Banana</option>
        <option value="Apple" selected="selected">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Lemon">Lemon</option>
        <option value="Pepper">Pepper</option>
        <option value="Mushrooms" selected="selected">Mushrooms</option>
        <option value="Cabbages">Cabbages</option>
        <option value="Celery">Celery</option>
        <option value="Garlic">Garlic</option>
        <option value="Brocoli">Brocoli</option>
    </select>
</div>
{% endhighlight %}
    </div>
</div>

&nbsp;

#### With group tag

When using `<optgroup>` tags, you can search for this labels in the search container to get a list of all possible options for the selected label.

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select multiple="multiple" data-bs-toggle="bootstrap-nice-select">
            <optgroup label="Fruit">
                <option value="Banana">Banana</option>
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
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <select multiple="multiple" data-bs-toggle="bootstrap-nice-select">
        <optgroup label="Fruit">
            <option value="Banana">Banana</option>
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
</div>
{% endhighlight %}
    </div>
</div>