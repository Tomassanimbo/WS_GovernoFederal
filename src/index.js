const axios = require('axios');
const cheerio =require('cheerio');


const urlpai = 'https://www.gov.br/pt-br/noticias'

axios.get(urlpai)
  .then(resp =>{
    const htmldata = resp.data 
    const $ = cheerio.load(htmldata)
    const dados = []
    $('[class="summary url"]').each((i,e)=>{
      const link = $(e).attr('href')
      dados.push(link)
    })
    console.log(dados)
  })