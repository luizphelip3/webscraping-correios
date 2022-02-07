import puppeteer from 'puppeteer';

  (async () => {
      // Define uma variável que executa a função prompt (Requisita uma informação ao usuário)
var cep = require('prompt');
// Inicia a função prompt
cep.start();

// Recebe a propriedade "Cep" do usuário
cep.get('cep', async function(_err: any, result: { cep: number}) {

  // Executa o puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Aciona a função "goto" para indicar o caminho que o navegador deve ir
  await page.goto(`http://www.consultaenderecos.com.br/busca-cep/${result.cep}`)

  // Retorna o resultado para o usuário
  console.log('O dado que você inseriu foi recebido: ' + result.cep + ' e o resultado da sua pesquisa está em endereço.png!');
  
  // Print para debug
  //console.log(`http://www.consultaenderecos.com.br/busca-cep/${result.cep}`)
  // Tira um print da página que o navegador acessou
  await page.screenshot({ path: 'endereco.png' });
  // Encerra o processo
  await browser.close();  
}); 
})();

  