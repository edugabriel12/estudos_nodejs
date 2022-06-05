const path = require('path')
const filePath = path.resolve(__dirname, 'pessoas.json')
const lePessoas = require('./modules/read')

async function leArquivo(caminho) {
  const dados = await lePessoas(caminho)
  renderizaDados(dados)
}

function renderizaDados(dados) {
  const pessoas = JSON.parse(dados)
  pessoas.forEach(valor => {
    console.log(valor.nome)
  })
}

leArquivo(filePath)
