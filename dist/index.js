"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Define uma variável que executa a função prompt (Requisita uma informação ao usuário)
    var cep = require('prompt');
    // Inicia a função prompt
    cep.start();
    // Recebe a propriedade "Cep" do usuário
    cep.get('cep', function (_err, result) {
        return __awaiter(this, void 0, void 0, function* () {
            // Executa o puppeteer
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            // Aciona a função "goto" para indicar o caminho que o navegador deve ir
            yield page.goto(`http://www.consultaenderecos.com.br/busca-cep/${result.cep}`);
            // Retorna o resultado para o usuário
            console.log('O dado que você inseriu foi recebido: ' + result.cep + ' e o resultado da sua pesquisa está em endereço.png!');
            // Print para debug
            //console.log(`http://www.consultaenderecos.com.br/busca-cep/${result.cep}`)
            // Tira um print da página que o navegador acessou
            yield page.screenshot({ path: 'endereco.png' });
            // Encerra o processo
            yield browser.close();
        });
    });
}))();
