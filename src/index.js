import { CurrencyExchange } from './js/currencyAPI.js';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.mini.css';
import './css/styles.css';

// class CurrencyExchange {
//   static async fetchCurrency(currency) {
//     const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`;
//     try {
//       const response = await fetch(url);
//       console.log(response);
//       if(response.status !== 200 && response.status === 400) {
//         throw new Error(response.statusText)
//       } else {
//         return response.json();
//       }
//     } catch(error) {
//       return error.response;
//     }
//   }
// }

async function runConverter(currency) {
  const response = await CurrencyExchange.fetchCurrency(currency);
  getData(response);
  console.log(response);
}

function getData(response) {
  if (response.result !== "success") {
    document.getElementById('#error-message').innerHTML(`Something went wrong, your result returned an ${response["error-type"]}`);
  } else {
    let exchangeValue = parseFloat(response[`conversion_rate`]);
    let inputVal = parseFloat(document.querySelector('#US-currency-amount').value);
    let exchangeDiv = document.querySelector('#output-exchange-rate');
    let convertedDiv = document.querySelector('#output-converted');
    const exchangeHTMLString =`The exchange rate from USD to ${response['target_code']} is ${exchangeValue} ${response['target_code']}`;
    const convertedHTMLString =`${inputVal} USD = ${exchangeValue * inputVal} ${response['target_code']}`;
    exchangeDiv.innerText = exchangeHTMLString;
    convertedDiv.innerText = convertedHTMLString;
  }
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  let currency = document.querySelector('#exchange-currency').value;
  runConverter(currency);
}