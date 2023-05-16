---
layout: "gettingstarted-introduction"
permalink: "getting-started/introduction"
title: "Getting Started [Introduction]"
description: "Getting Started introduction webpage for how to download and use Bootstrap-Nice-Select and how it can be used to make your Bootstrap webpage better"
---

# Introduction

#### An overview of Bootstrap-Nice-Select, how to download and use it, basic templates, and more.

---

&nbsp;

## **Quickstart**

Looking to quickly add Bootstrap-Nice-Select to your [Bootstrap 5](https://getbootstrap.com/) project? Use CDN, provided for free by the folks at UNPKG, using a package manager or need to download the source files? [Head to the downloads page]({% link sites/getting-started/download.markdown %}). 

&nbsp;

#### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load the CSS. The CSS needs to be loaded after Bootstrap.css, because the components will use
Bootstrap variables.

{% highlight html %}
<link rel="stylesheet" href="https://unpkg.com/bootstrap-nice-select@1.3.0/dist/css/bootstrap-nice-select.min.css">
{% endhighlight %}

&nbsp;

#### JS

Place the following `script`/s near the end of your pages, right before the closing `</body>` tag, to enable them. If using Bootstrap 4, jQuery must come first, then Bootstrap.js, and then our JavaScript files.

{% highlight html %}
<script src="https://unpkg.com/bootstrap-nice-select@1.3.0/dist/js/bootstrap-nice-select.min.js"></script>
{% endhighlight %}

&nbsp;

## **HTML5 doctype**

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky and incomplete styling.

{% highlight html %}
<!doctype html>
<html lang="en">
  ...
</html>
{% endhighlight %}

&nbsp;

## **Template**

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and a viewport meta tag for proper responsive behaviors. Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps.

For the Bootstrap-Nice-Select component, we use [Font Awesome 6](https://fontawesome.com/search) as the default icons, so we need to import the icons link too. If you want to change it, look in the docs and set a different default icon set or use your own icons.

Put it all together, your pages should look like the following:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Bootstrap-Nice-Select!</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-nice-select@1.3.0/dist/css/bootstrap-nice-select.min.css">
  </head>
  <body>
    <div>
    ...
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-nice-select@1.3.0/dist/js/bootstrap-nice-select.min.js"></script>
  </body>
</html>
{% endhighlight %}

&nbsp;