const { mkdir } = require('fs').promises
const { join } = require('path')

const { DIST, copyFromSrcToDist, buildPackageWithDeps } = require('./my-fs.js')

async function build() {
  await mkdir(DIST, { recursive: true })

  await Promise.all([
    copyFromSrcToDist('favicon.png'),
    copyFromSrcToDist('index.html'),
    copyFromSrcToDist('reset.css'),
    copyFromSrcToDist('root.css'),
    copyFromSrcToDist('main.css'),

    copyFromSrcToDist('web-component'),
    copyFromSrcToDist('use-toggle'),
    copyFromSrcToDist('xsolla-summer-school'),

    buildPackageWithDeps('vanilla-auth-form'),
  ])

  await Promise.all([
    copyFromSrcToDist(join('vanilla-auth-form', 'dist'), 'vanilla-auth-form'),
    copyFromSrcToDist(join('vanilla-auth-form', 'preview.png')),
  ])
}

build().catch((e) => {
  console.error(e)
  process.exit(1)
})
