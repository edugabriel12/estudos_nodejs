const fs = require('fs').promises

module.exports = (caminho, dadosJson) => {
  fs.writeFile(caminho, dadosJson, { flag: 'w' })
}
