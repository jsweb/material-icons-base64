import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import less from 'less'
import pack from './package.json'

const root = process.cwd()
const now = new Date().toJSON()

const main = join(root, 'main.css')
const file = join(root, 'jsweb-packs', 'web', 'source.css')
const source = readFileSync(file, 'utf8')

const css = source
  .replace('truetype', 'woff2')
  .replace(/https.+.ttf/, 'source.woff2"')
  .replace('url(', 'data-uri("')

less
  .render(css, { filename: file })
  .then((output) => {
    const result = [
      '/**',
      ` * ${pack.name}`,
      ` * @version ${pack.version}`,
      ` * @desc ${pack.description}`,
      ` * @author ${pack.author}`,
      ' * @create date 2017-07-15 14:50:00',
      ` * @modify date ${now}`,
      ' */',
      output.css,
    ].join('\n')

    writeFileSync(main, result)
  })
  .catch((error) => console.log('Error:', error))
