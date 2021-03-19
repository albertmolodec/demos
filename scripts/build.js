const { ensureDir } = require('fs-extra')
const { join } = require('path')

const { DIST, copyFromSrcToDist, buildPackageWithDeps } = require('./my-fs.js')

async function build() {
  await ensureDir(DIST)

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

  await copyFromSrcToDist(
    join('vanilla-auth-form', 'dist'),
    'vanilla-auth-form'
  )

  await copyFromSrcToDist(join('vanilla-auth-form', 'preview.png'))
}

build().catch((e) => {
  console.error(e)
  process.exit(1)
})
