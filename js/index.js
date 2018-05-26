// create price display on the DOM via price id selector
var ethPriceDisplay = document.querySelector("#priceEth")
var btcPriceDisplay = document.querySelector("#priceBtc")
var ltcPriceDisplay = document.querySelector("#priceLtc")
var xmrPriceDisplay = document.querySelector("#priceXmr")
var bchPriceDisplay = document.querySelector("#priceBch")
var xrpPriceDisplay = document.querySelector("#priceXrp")
var grlcPriceDisplay = document.querySelector("#priceGrlc")

// set XHR equal to new XMLHttpRequest() invocation
var XHR = new XMLHttpRequest();
var XHR2 = new XMLHttpRequest();
  
XHR.onreadystatechange = function() {
  // if readyState and status code complete
  if(XHR.readyState == 4 && XHR.status == 200) {
    // create variable data and set it equal to the output of running JSONparse over the returned data from the server
    var data = JSON.parse(XHR.responseText);
    // log the price in usd by accessing the correct obj of the data array
    // console.log(data)
    // console.log(data[0]['price_usd']);
    var ethPrice = data['data']['1027']['quotes']['USD']['price'];
    var btcPrice = data['data']['1']['quotes']['USD']['price'];
    var ltcPrice = data['data']['2']['quotes']['USD']['price'];
    var xmrPrice = data['data']['328']['quotes']['USD']['price'];
    var bchPrice = data['data']['1831']['quotes']['USD']['price'];
    var xrpPrice = data['data']['52']['quotes']['USD']['price'];
    // console.log(ethPrice);
    ethPriceDisplay.innerText = ethPrice;
    btcPriceDisplay.innerText = btcPrice;
    ltcPriceDisplay.innerText = ltcPrice;
    xmrPriceDisplay.innerText = xmrPrice;
    bchPriceDisplay.innerText = bchPrice;
    xrpPriceDisplay.innerText = xrpPrice;
  }
  
}

// GRLC is not listed in the first url, so a second XHR instance is created
XHR2.onreadystatechange = function() {
  if(XHR2.readyState == 4 && XHR2.status == 200) {
    var data2 = JSON.parse(XHR2.responseText)
    var grlcPrice = data2['data']['quotes']['USD']['price'];
    grlcPriceDisplay.innerText = grlcPrice;
  }
}
  
var url = "https://api.coinmarketcap.com/v2/ticker/"
var url2 = "https://api.coinmarketcap.com/v2/ticker/2475/"
XHR.open("GET", url);
XHR2.open("GET", url2);
XHR.send();
XHR2.send();