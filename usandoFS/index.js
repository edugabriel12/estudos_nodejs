const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
  rootDir =
    rootDir || path.resolve(__dirname, '..', '..', '..', 'Curso JS + TS')
  const files = await fs.readdir(rootDir)
  walk(files, rootDir)
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if (stats.isDirectory()) {
      readdir(fileFullPath)
      continue
    }

    // if (!/LICENSE$/g.test(fileFullPath)) continue

    console.log(file)
  }
}

readdir(path.resolve(__dirname, '..', '..', '..', 'Curso JS + TS'))
