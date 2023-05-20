# Conversão de Moedas

Este é um projeto simples que permite converter valores entre diferentes moedas utilizando API REST. O usuário pode inserir um valor, selecionar a moeda de origem e a moeda de destino, e obter o resultado da conversão em tempo real.

## Funcionalidades

- Digite o valor a ser convertido.
- Selecione a moeda de origem e a moeda de destino.
- Clique no botão "Converter" para realizar a conversão.
- Veja o resultado da conversão exibido na tela.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Axios (biblioteca para requisições HTTP)

## Configuração

1. Clone o repositório ou faça o download dos arquivos.
<br>`git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Abra o arquivo `index.html` em um navegador web.

## API de Taxas de Câmbio

Este projeto utiliza a API pública do ExchangeRate-API para obter as taxas de câmbio em tempo real. Para utilizar essa API, é necessário obter uma chave de API válida. Caso você ainda não tenha uma chave, siga as etapas abaixo:

1. Acesse o site do [ExchangeRate-API](https://www.exchangerate-api.com/).
2. Crie uma conta gratuita e faça login.
3. Copie sua chave de API.
4. No arquivo `script.js`, substitua `'YOUR_API_KEY'` pela sua chave de API na variável `apiKey`.
<br>`var apiKey = 'YOUR_API_KEY';`

## Personalização
Você pode personalizar o estilo da página editando o arquivo styles.css. Sinta-se à vontade para modificar as cores, fontes e layout de acordo com suas preferências.

## Contribuição
Sinta-se à vontade para contribuir com melhorias neste projeto. Se você encontrar algum problema ou tiver uma ideia de recurso, abra uma nova "Issue" ou envie um "Pull Request".

## Licença
Este projeto está licenciado sob a Licença MIT.
