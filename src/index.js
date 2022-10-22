const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  
const fetchExchanger = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchExchanger();