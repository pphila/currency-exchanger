import { CurrencyExchange } from './js/currencyAPI.js';
import 'bootstrap';
import './css/styles.css';

async function runConverter(currency) {
  const response = await CurrencyExchange.fetchCurrency(currency);
  getData(response);
  console.log(response);
}

function getData(response) {
  if (response.result !== "success") {
    let errorDiv = document.querySelector('#error-message');
    const errorHTMLString = `Something went wrong, your result returned an ${response['error-type']}`;
    errorDiv.innerText = errorHTMLString;
  } else {
    let exchangeValue = parseFloat(response[`conversion_rate`]);
    let inputVal = parseFloat(document.querySelector('#US-currency-amount').value);
    let exchangeDiv = document.querySelector('#output-exchange-rate');
    let convertedDiv = document.querySelector('#output-converted');
    const exchangeHTMLString =`The exchange rate from 1 USD to 1 ${response['target_code']} is ${exchangeValue} ${response['target_code']}`;
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