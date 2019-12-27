# @jsweb/material-icons-base64 ![img](https://travis-ci.com/jsweb/material-icons-base64.svg?branch=master)

Material Icons compiled with base64 embedded font to CSS instead of link to font files.

## About

This compilation uses original files from Google project and a little custom hack with Stylus build to replace `@font-face src url` settings and embed font with `data-uri`.

Only WOFF2 fonts are included to minify the compiled CSS at most as possible and because WOFF2 is supported by all major modern browsers. Web is the focus here.

IE compatibility is not a concern. For a compatibility reference see the link:

[Can I use - WOFF2](http://caniuse.com/#search=woff2)

## Install

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@jsweb/material-icons-base64"/>
```

### NPM

`npm i -S @jsweb/material-icons-base64`

### Yarn

`yarn add @jsweb/material-icons-base64`

## Files

If you download the package using NPM or Yarn, you need to use `dist/main.css` file.

You can see the icons at Material Icons index:

https://material.io/resources/icons/?style=baseline
