// Objectivo
// titulo
// linkimg
// datapublicacao
// texto

const axios = require('axios');
const cheerio = require('cheerio');

const urlFilho = 'https://www.gov.br/pt-br/noticias/educacao-e-pesquisa/2023/07/politica-de-alfabetizacao-ja-teve-adesao-de-78-dos-municipios'

axios.get(urlFilho)
  .then(response=>{
    const dadosHtml = response.data 
    const dados = []
    const $ = cheerio.load(dadosHtml)
    const titulo = $('h1').text()
    const linkImg = $('img').attr('src')
    const dataPublicacao = $('[class="value"]').text()
    const texto = $('[property="rnews:articleBody"]').text()
    dados.push(
      titulo,
      linkImg,
      dataPublicacao,
      texto )
    console.log(dados)
  })
