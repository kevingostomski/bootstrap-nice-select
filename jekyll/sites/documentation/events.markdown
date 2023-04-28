---
layout: "documentation-events"
permalink: "documentation/events"
title: "Documentation [Events]"
---

# Select Events

#### The Select Events API of Bootstrap-Nice-Select

---

&nbsp;

Events can currently be bound only in one way:

{% highlight javascript %}
let select = document.queryselector("#my-selector");
let componentInit = bootstrapNiceSelect.BootstrapNiceSelect('#my-selector');

select.addEventListener("event-name.bs.bootstrap-nice-select", function(e, arg1,arg2, ...){
    // do something...
});
{% endhighlight %}

&nbsp;

&nbsp;

## **Inserted**

- **Event:** `inserted.bs.bootstrap-nice-select`
- **Parameter:**
 
| Key | Description |
| --- | --- |
| `e.detail.key` | The key or rather the setted `value` for the `<option>` element which is added. |
| `e.detail.value` | The value or rather the setted `innerText` for the `<option>` element which is added. |

&nbsp;

- **Detail:**
  The event is fired immediately after a new option will be added to the `<select>` field.
- **Example:** [Inserted]({% link sites/examples/events/inserted.markdown %})

&nbsp;

&nbsp;

## **Removed**

- **Event:** `removed.bs.bootstrap-nice-select`
- **Parameter:**
 
| Key | Description |
| --- | --- |
| `e.detail.key` | The key or rather the setted `value` for the `<option>` element which is removed. |
| `e.detail.value` | The value or rather the setted `innerText` for the `<option>` element which is removed. |

&nbsp;

- **Detail:**
  The event is fired immediately after an option will be removed from the `<select>` field.
- **Example:** [Removed]({% link sites/examples/events/removed.markdown %})