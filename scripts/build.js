const { copyFile, mkdir } = require('fs').promises
const { join } = require('path')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

const { copyDir } = require('./copyDir.js')

const SRC = join(__dirname, '..', 'src')
const DIST = join(__dirname, '..', 'dist')
const FAVICON = join(SRC, 'favicon.ico')
const ROOT_HTML = join(SRC, 'index.html')
const ROOT_CSS = join(SRC, 'root.css')

async function installAndBuild(package) {
  await exec(`cd ${join(SRC, package)} && npm i && npm run build`)
}

async function build() {
  await mkdir(DIST, { recursive: true })

  await Promise.all([
    copyFile(join(SRC, 'index.html'), join(DIST, 'index.html')),
    copyFile(join(SRC, 'root.css'), join(DIST, 'root.css')),
    copyFile(join(SRC, 'favicon.png'), join(DIST, 'favicon.png')),
    copyDir(join(SRC, 'web-component'), join(DIST, 'web-component')),
    copyDir(join(SRC, 'use-toggle'), join(DIST, 'use-toggle')),
    copyDir(
      join(SRC, 'xsolla-summer-school'),
      join(DIST, 'xsolla-summer-school')
    ),
    installAndBuild('vanilla-auth-form'),
  ])

  await Promise.all([
    copyDir(
      join(SRC, 'vanilla-auth-form', 'dist'),
      join(DIST, 'vanilla-auth-form')
    ),
  ])
}

build().catch((e) => {
  console.error(e)
  process.exit(1)
})
