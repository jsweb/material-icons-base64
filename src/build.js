const fs = require('fs'),
    path = require('path'),
    proc = require('child_process'),
    src = path.join(__dirname, '..', 'snipacks', 'web', 'src.css'),
    dest = path.join(__dirname, 'index.less')

fs.readFile(src, 'utf8', (e, str) => {
    const result = str
        .replace('truetype', 'woff')
        .replace(/url.+ttf\)/, 'data-uri("../snipacks/unpkg/font.woff")')
    fs.writeFile(dest, result, () => proc.exec('yarn start'))
})
