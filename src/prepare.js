import { readFileSync, writeFileSync } from 'fs'
import { mkdir } from 'shelljs'
import { join } from 'path'
import stylus from 'stylus'

const root = process.cwd()

const main = join(root, 'dist', 'main.css')

const styl = join(root, 'jsweb-packs', 'web', 'source.styl')

const source = readFileSync(styl, 'utf8')

const result = source
  .replace('truetype', 'woff2')
  .replace(/https.+.ttf/, 'source.woff2')

mkdir('-p', root, 'dist')

stylus(result)
  .set('filename', styl)
  .define('url', stylus.url({ limit: false }))
  .render((err, css) => {
    if (err) {
      console.log('Error:', err)
    } else {
      writeFileSync(main, css)
    }
  })
