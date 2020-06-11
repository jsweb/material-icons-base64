import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import stylus from 'stylus'
import pack from './package.json'

const root = process.cwd()
const now = new Date().toJSON()

const main = join(root, 'main.css')
const styl = join(root, 'jsweb-packs', 'web', 'source.styl')
const source = readFileSync(styl, 'utf8')

const result = source
  .replace('truetype', 'woff2')
  .replace(/https.+.ttf/, 'source.woff2')

stylus(result)
  .set('filename', styl)
  .define('url', stylus.url({ limit: false }))
  .render((err, css) => {
    if (err) {
      console.log('Error:', err)
    } else {
      const result = [
        '/**',
        ` * ${pack.name}`,
        ` * @version ${pack.version}`,
        ` * @desc ${pack.description}`,
        ` * @author ${pack.author}`,
        ' * @create date 2017-07-15 14:50:00',
        ` * @modify date ${now}`,
        ' */',
        css,
      ].join('\n')

      writeFileSync(main, result)
    }
  })
