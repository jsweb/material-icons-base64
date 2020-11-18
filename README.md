# @jsweb/material-icons-base64 ![NPM Package](https://github.com/jsweb/material-icons-base64/workflows/NPM%20Package/badge.svg)

Material Icons compiled with base64 embedded font to CSS instead of link to font file.

## About

This compilation uses original files from Google and a little custom build hack with LESS to replace `@font-face src url` settings and embed font with `data-uri`.

Only WOFF2 fonts are included to minify the compiled CSS at most as possible and because WOFF2 is supported by all modern major browsers. The result CSS file is about 125kb, with no compression.

Web projects are the target. Specially PWA with offline capabilities, where request remote Google files to get the icons couldn't work.

IE compatibility is not a concern. For a compatibility reference see the link:

[Can I use - WOFF2](http://caniuse.com/#search=woff2)

## Install

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@jsweb/material-icons-base64" />
```

### NPM

`npm i -S @jsweb/material-icons-base64`

### Yarn

`yarn add @jsweb/material-icons-base64`

## Files

If you download the package using NPM or Yarn, you need to use `main.css` file, at the root package folder.

You can see the icons at Material Icons index:

https://material.io/resources/icons/?style=baseline
