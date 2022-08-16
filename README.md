# @jsweb/material-icons-base64 ![NPM Package](https://github.com/jsweb/material-icons-base64/workflows/NPM%20Package/badge.svg)

Material Icons compiled with WOFF2 base64 embedded fonts to CSS instead of link to font files.

## About

This compilation uses original files from Google Fonts and a little magic through a custom build using PostCSS to embed the font file in CSS as base64 string.

Only WOFF2 fonts are included to minify the compiled CSS at most as possible, and because WOFF2 is supported by all modern major browsers.

Web projects are the target. Especially mobile web view apps and PWA with offline capabilities, caching the CSS icons lib easily.

IE compatibility is not a concern (it is dead, accept it). For a compatibility reference see the link:

[Can I use - WOFF2](http://caniuse.com/#search=woff2)

## Install

### NPM

`npm i -S @jsweb/material-icons-base64`

### Yarn

`yarn add @jsweb/material-icons-base64`

### PNPM

`pnpm add @jsweb/material-icons-base64`

## Usage

CSS compilations in this package:

- `md-icons.css`, class `material-icons`, for Material Icons Filled (169 KB)
- `md-icons-outlined.css`, class `material-icons-outlined`, for Material Icons Outlined (203 KB)
- `md-symbols-outlined.css`, class `material-symbols-outlined`, for Material Symbols Oulined (266 KB)
- `md-symbols-rounded.css`, class `material-symbols-rounded`, for Material Symbols Rounded (305 KB)

If you are using a build tool for CSS compilation, just import the file you want in your CSS, like this:

```css
@import '@jsweb/material-icons-base64/md-icons.css';
```

If you prefer to link the files from the CDN source, you can do it like this:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@jsweb/material-icons-base64/md-symbols-outlined.css"
/>
```

So, just code your icon tags like this:

```html
<span class="material-icons">home</span>
<span class="material-symbols-outlined">home</span>
```

## Icons

You can check the icons at Google Fonts index:

- [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons)
- [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols)
