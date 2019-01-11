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
                //TODO: Agregar la validacion del dia, si el servicio aun no tiene el resultado del dia actual, 
                //enviar el resultado del dia anterior.
                let date = new Date();
                let month = (date.getMonth() +1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() +1);
                let key = date.getFullYear() + '-' + month + '-' + date.getDate();
                return [dailies[key], key];})
            .then(result =>{
                if (result['0']) {
                    onSuccess({'open' : result['0']['1. open'],
                    'high' :result['0']['2. high'],
                    'low' : result['0']['3. low'],
                    'close' : result['0']['4. close'],
                    'date': result['1']});
                } else {
                    onSuccess({'open' : '',
                    'high' :'',
                    'low' : '',
                    'close' : '',
                    'date': result['1']});
                }
            });
    }
}
