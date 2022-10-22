import { CurrencyExchange } from './js/currencyAPI.js';
import 'bootstrap';
import 'bootstrap/dist/css/boostrap.mini.css';
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
  runConverter(response);
  console.log(response);
}
runConverter();

function getData(response) {
  if (response.result !== "success") {
    document.getElementById('#error-message').innerHTML(`Something went wrong, your result returned an ${response["error-type"]}`);
  } else {
    let exchangeValue = parseFloat(response[`conversion_rate`]);
    document.getElementById('#output-exchange').innerHTML(`The exchange rate compared to USD is ${response['target_code']} is ${exchangeValue}`);
    
  }
}

//UI
//const displayExchange = (currency) => {
//   const outputDiv = document.getElementById('output-exchange');
//   const currencyHTMLString = 
// }