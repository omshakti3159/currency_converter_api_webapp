function convert() {
    var basecurrency = document.getElementById('select1').value;
    var num = document.getElementById('inputBox').value;
    var convertBase = document.getElementById('select2').value;
    var url = `https://api.exchangeratesapi.io/latest?base=${basecurrency}`;
    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {

            var getRate = data.convertBase;
            var keysArray = Object.keys(data.rates);
            var index = matchChangingCurrenvcy(keysArray, convertBase)
            var valuesArray = Object.values(data.rates);
            var result = num * valuesArray[index];
            document.getElementById('show-result').value = result;
        })
}

function matchChangingCurrenvcy(keyArray, currency) {
    for (var i = 0; keyArray[i] != currency; i++);
    return i;
}