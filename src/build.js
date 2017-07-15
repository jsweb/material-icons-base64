const fs = require('fs'),
    path = require('path'),
    proc = require('child_process'),
    src = path.join(__dirname, '..', 'snipacks', 'web', 'src.css'),
    icn = path.join(__dirname, '..', 'snipacks', 'unpkg', 'icons.txt'),
    less = path.join(__dirname, 'index.less'),
    json = path.join(__dirname, '..', 'index.json'),
    css = fs.readFileSync(src, 'utf8'),
    txt = fs.readFileSync(icn, 'utf8'),
    result = css.replace('truetype', 'woff')
        .replace(/url.+ttf\)/, 'data-uri("../snipacks/unpkg/font.woff")'),
    list = txt.split('\n').map(str => {
        const [id, unicode] = str.split(' '),
            filter = id.split('_')
        return {
            id, unicode, filter,
            name: filter.join(' ')
        }
    })

fs.writeFile(less, result, () => {
    fs.writeFile(json, JSON.stringify(list), () => proc.exec('yarn start'))
})
