![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/kevingostomski/bootstrap-nice-select/build-jekyll.yml)
![npm](https://img.shields.io/npm/v/bootstrap-nice-select)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/kevingostomski/bootstrap-nice-select/dev/webpack)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kevingostomski/bootstrap-nice-select)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fkevingostomski.github.io%2Fbootstrap-nice-select%2F)
![GitHub](https://img.shields.io/github/license/kevingostomski/bootstrap-nice-select)

# **[Bootstrap-Nice-Select](https://kevingostomski.github.io/bootstrap-nice-select/)**

A modern looking select field for form submits which uses Bootstrap as dependency to style it. It can be initialized over HTML or JS and does not need jQuery to work with!

# **Features**

- Created for Twitter Bootstrap (All versions supported)
- Responsive web design
- Modern looking scrollable select lists
- Fully skinnable, CSS built with SASS 
- Localization
- Get data in JSON format using AJAX/Fetch and have them searchable
- Allow users to type in new options and add it on the fly
- Setting icons option to override possible currently available themes
- Options for calling methods which will be automatically added after the respective event listeners

# **Installation**

### Manual Download

Use [Releases Pages](https://github.com/kevingostomski/bootstrap-nice-select/releases) or clone the repo: `https://github.com/kevingostomski/bootstrap-nice-select.git` and use the `dist` folder.

### Npm

```
npm install bootstrap-nice-select
```

### Yarn

```
yarn add bootstrap-nice-select
```

### CDN

You can source bootstrap-nice-select directly from a CDN like [unpkg](https://unpkg.com).

```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://unpkg.com/bootstrap-nice-select@1.4.0/dist/css/bootstrap-nice-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/bootstrap-nice-select@1.4.0/dist/js/bootstrap-nice-select.min.js"></script>

```

> The CDN is updated after the release is made public, which means that there is probably a delay between the publishing of a release and its availability on the CDN.

# **Release History**
Look at the [Change Log](CHANGELOG.md).

# **Local Development**

Development of this plugin was with [Visual Studio Code](https://code.visualstudio.com/).

To develop `bootstrap-nice-select` locally please run:

```
mkdir bootstrap-nice-select-dev
cd bootstrap-nice-select-dev
git clone https://github.com/kevingostomski/bootstrap-nice-select.git
git clone https://github.com/kevingostomski/bootstrap-nice-select-examples.git
cd bootstrap-nice-select
npm link
cd ..
cd bootstrap-nice-select-examples
npm link bootstrap-nice-select
```

To develop the component, the VS Code plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) was used (special thanks to the maintainers for this wonderful plugin).
In addition, if you want to update the `npm link` project which is used, use `npm run dev` so sourcemaps are available to test the project better.

# **Copyright and license**

Copyright (C) 2023

The license is available within the repository in the [LICENSE](LICENSE) file.