const axios = require('axios')
const cheerio = require('cheerio')
const urlpai = 'https://www.gov.br/pt-br/noticias';

function extrairdados(link){
  axios.get(link)
  .then(response=>{
    const dadosHtml = response.data 
    const dados = []
    const $ = cheerio.load(dadosHtml)
    const titulo = $('h1').text()
    const linkImg = $('img').attr('src')
    const dataPublicacao = $('[class="value"]').text()
    const texto = $('[property="rnews:articleBody"]').text()
    const dado = {titulo, linkImg, dataPublicacao, texto }
    dados.push(dado)
    console.log(dados);
  });
};

const links = axios.get(urlpai)
.then(resp =>{
  const htmldata = resp.data ;
  const $ = cheerio.load(htmldata);
  const dados = []
  $('[class="summary url"]').each((i,e)=>{
    const link = $(e).attr('href');
    dados.push(link);
  })
  return dados;
});

async function main(){
  const lnks = await links;

  lnks.map((i,e)=>{
    extrairdados(i)
  })
}

main();