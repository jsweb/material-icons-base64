import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import pack from './package.json' assert { type: 'json' }
import postcss from 'postcss'
import url from 'postcss-url'

const root = process.cwd()
const now = new Date().toJSON()
const inline = url({ url: 'inline' })

async function build(name) {
  const dest = join(root, `${name}.css`)
  const file = join(root, 'jsweb-packs', 'web', `${name}.css`)
  const source = readFileSync(file, 'utf8')

  const css = source.replace(
    /url\(.+\)/,
    `url('${name}.woff2') format('woff2')`,
  )

  const output = await postcss().use(inline).process(css, { from: file })

  const result = [
    '/**',
    ` * ${pack.name}`,
    ` * @version ${pack.version}`,
    ` * @desc ${pack.description}`,
    ` * @author ${pack.author}`,
    ' * @create date 2017-07-15 14:50:00',
    ` * @modify date ${now}`,
    ' */',
    output,
  ].join('\n')

  return writeFileSync(dest, result)
}

build('symbols')
build('icons')
