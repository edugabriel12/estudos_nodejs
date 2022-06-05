const path = require('path')
const filePath = path.resolve(__dirname, 'pessoas.json')
const pessoas = require('./modules/write')

const arrayPessoas = [
  {
    nome: 'Eduardo'
  },
  {
    nome: 'Gabriel'
  },
  {
    nome: 'Carvalho'
  }
]

const json = JSON.stringify(arrayPessoas, '', 1)
pessoas(filePath, json)
