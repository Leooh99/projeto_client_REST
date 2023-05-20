function convertCurrency() {
  var amount = document.getElementById('amount').value;
  var fromCurrency = document.getElementById('from').value;
  var toCurrency = document.getElementById('to').value;

  // Substitua 'YOUR_API_KEY' pela sua chave de API válida
  var apiKey = 'YOUR_API_KEY';

  var url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

  axios.get(url)
    .then(function(response) {
      var result = response.data.conversion_result.toFixed(2);
      document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    })
    .catch(function(error) {
      console.log(error);
    });
}
