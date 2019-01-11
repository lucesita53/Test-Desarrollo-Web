const symbolCompanies = ['FB', 'AAPL', 'MSFT', 'GOOGL', 'AMZN']

export default class Calls {
    
    async callWebService(onSuccess, symbolCompany)  {
        if (!symbolCompanies.includes(symbolCompany)) {
            return;
        }
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbolCompany + '&outputsize=compact&apikey=X86NOH6II01P7R24';
                   fetch(url)
                       .then(response => response.json())
                       .then(obj => obj['Time Series (Daily)'])
                       .then(dailies => {
                           let date = new Date();
                           let month = (date.getMonth() +1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() +1);
                           let key = date.getFullYear() + '-' + month + '-' + date.getDate();
                           return dailies[key];})
                        .then(result =>{
                            if (result) {
                                onSuccess({'open' : result['1. open'],
                                'high' :result['2. high'],
                                'low' : result['3. low'],
                                'close' : result['4. close']});
                            }
                        });
    }
}
