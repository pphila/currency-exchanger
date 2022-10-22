export class CurrencyExchange {
  static async fetchCurrency(currency) {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`;
    try {
      const response = await fetch(url);
      console.log(response);
      if(response.status !== 200 && response.status === 403) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    } catch(error) {
      return error.response;
    }
  }
}