const { mkdir } = require('fs').promises
const { join } = require('path')

const { DIST, copyFromSrcToDist, buildPackageWithDeps } = require('./my-fs.js')

async function build() {
  await mkdir(DIST, { recursive: true })

  await Promise.all([
    copyFromSrcToDist('index.html'),
    copyFromSrcToDist('root.css'),
    copyFromSrcToDist('favicon.png'),

    copyFromSrcToDist('web-component'),
    copyFromSrcToDist('use-toggle'),
    copyFromSrcToDist('xsolla-summer-school'),

    buildPackageWithDeps('vanilla-auth-form'),
  ])

  copyFromSrcToDist(join('vanilla-auth-form', 'dist'), 'vanilla-auth-form')
}

build().catch((e) => {
  console.error(e)
  process.exit(1)
})
