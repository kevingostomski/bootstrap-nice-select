# **[Bootstrap-Nice-Select](https://kevingostomski.github.io/bootstrap-nice-select/)**

A modern looking select field for form submits which uses Bootstrap as dependency to style ist. It can be initialized over HTML or JS and does not need jQuery to work with!

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

You can source bootstrap-nice-select directly from a CDN like [jsdelivr](https://www.jsdelivr.com).

> The CDN is updated after the release is made public, which means that there is a delay between the publishing of a release and its availability on the CDN.

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

# **Copyright and license**

Copyright (C) 2023

The license is available within the repository in the [LICENSE](LICENSE) file.