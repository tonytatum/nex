function text(){
  var coinSe =document.getElementById('selectedCoin').value;
  var currSe =document.getElementById('selectedCurrency').value;
    var inputField=document.getElementById('asset-input-2').value;
   var profitPercent = 0.35;
 var coival= 200;
 var outputField= 502;
 const url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency="+currSe+"&order=market_cap_desc&per_page=100&page=1&sparkline=false"
const url2 ="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin&vs_currencies=usd%2Ceur"

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    // let apiData =data.currencies;
      // console.log(data.bitcoin.usd);
//       var coival= data.bitcoin.usd;
//       var liteone=data.litecoin.eur;
//       console.log(coival + liteone)
//       var outputField= profitPercent/coival;
//       var outp = profitPercent/liteone
//
// console.log(coinSe);
var coinbit=data[0].id;
var coineth=data[1].id;
var cointet=data[2].id;
var coinusd=data[4].id;
var coinftm=data[31].id;
var coindot=data[10].id;
var coinshib=data[14].id;
var coinalgo=data[27].id;
var coinbnb=data[3].id;
var coinltc=data[20].id;
var coindai=data[18].id;
var coinsol=data[7].id;
var coinada=data[8].id;
var cointron=data[23].id;

var coival= data[0].current_price;
 console.log(coinbit + " "+currSe +" "+ coinSe);

      if(coinbit == coinSe){
        console.log( profitPercent);
      var overall= coival;
        var annualYield=    (profitPercent*inputField) + inputField;
  console.log( inputField);
         outputField = 3+4;

        console.log("bitcoin " + outputField)
document.getElementById("asset-input-4").value = outputField
      //
    }else
        if(coineth == coinSe){
          console.log( "fixed "+profitPercent);
        var overall= data[1].current_price;
          var annualYield=    profitPercent + inputField;

           outputField = annualYield;

          console.log("ethereum " + outputField)
  document.getElementById("asset-input-4").value = outputField
        }else
            if(cointet == coinSe){
              console.log( "fixed "+profitPercent);
            var overall= data[2].current_price;
              var annualYield=    profitPercent + inputField;

               outputField = annualYield;

              console.log("ethereum " + outputField)
      document.getElementById("asset-input-4").value = outputField
            }else
                if(coinusd == coinSe){
                  console.log( "fixed "+profitPercent);
                var overall= data[4].current_price;
                  var annualYield=    profitPercent + inputField;

                   outputField = annualYield;

                  console.log("ethereum " + outputField)
          document.getElementById("asset-input-4").value = outputField
                }else
                    if(coinftm == coinSe){
                      console.log( "fixed "+profitPercent);
                    var overall= data[31].current_price;
                      var annualYield=    profitPercent + inputField;

                       outputField = annualYield;

                      console.log("ethereum " + outputField)
              document.getElementById("asset-input-4").value = outputField
                    }else
                        if(coindot == coinSe){
                          console.log( "fixed "+profitPercent);
                        var overall= data[10].current_price;
                          var annualYield=    profitPercent + inputField;

                           outputField = annualYield;

                          console.log("polkadot " + outputField)
                  document.getElementById("asset-input-4").value = outputField
                        }else
                            if(coinshib == coinSe){
                              console.log( "fixed "+profitPercent);
                            var overall= data[14].current_price;
                              var annualYield=    profitPercent + inputField;

                               outputField = annualYield;

                              console.log("shiba inu " + outputField)
                      document.getElementById("asset-input-4").value = outputField
                            }else
                                if(coinalgo == coinSe){
                                  console.log( "fixed "+profitPercent);
                                var overall= data[27].current_price;
                                  var annualYield=    profitPercent + inputField;

                                   outputField = annualYield;

                                  console.log("algorand " + outputField)
                          document.getElementById("asset-input-4").value = outputField
                                }else
                                    if(coinbnb == coinSe){
                                      console.log( "fixed "+profitPercent);
                                    var overall= data[3].current_price;
                                      var annualYield=    profitPercent + inputField;

                                       outputField = annualYield;

                                      console.log("binancecoin " + outputField)
                              document.getElementById("asset-input-4").value = outputField
                                    }else
                                        if(coinltc == coinSe){
                                          console.log( "fixed "+profitPercent);
                                        var overall= data[20].current_price;
                                          var annualYield=    profitPercent + inputField;

                                           outputField = annualYield;

                                          console.log("litecoin " + outputField)
                                  document.getElementById("asset-input-4").value = outputField
                                        }else
                                            if(coindai == coinSe){
                                              console.log( "fixed "+profitPercent);
                                            var overall= data[18].current_price;
                                              var annualYield=    profitPercent + inputField;

                                               outputField = annualYield;

                                              console.log("dai " + outputField)
                                      document.getElementById("asset-input-4").value = outputField
                                            }else
                                                if(coinsol == coinSe){
                                                  console.log( "fixed "+profitPercent);
                                                var overall= data[7].current_price;
                                                  var annualYield=    profitPercent + inputField;

                                                   outputField = annualYield;

                                                  console.log("solana " + outputField)
                                          document.getElementById("asset-input-4").value = outputField
                                                }else
                                                    if(coinada == coinSe){
                                                      console.log( "fixed "+profitPercent);
                                                    var overall= data[8].current_price;
                                                      var annualYield=    profitPercent + inputField;

                                                       outputField = annualYield;

                                                      console.log("cardano " + outputField)
                                              document.getElementById("asset-input-4").value = outputField
                                                    }else
                                                        if(cointron == coinSe){
                                                          console.log( "fixed "+profitPercent);
                                                        var overall= data[23].current_price;
                                                          var annualYield=    profitPercent + inputField;

                                                           outputField = annualYield;

                                                          console.log("dai " + outputField)
                                                  document.getElementById("asset-input-4").value = outputField
                                                        }
      // //     if(coinSe =="litecoin" && currSe == "eur"){
      // //      coival= data.litecoin.eur;
      // //     console.log(coival);
      // //     outputField = profitPercent/coival;
      // //     console.log("litecoin" + outputfield)
      // //       document.getElementById("asset-input-4").value = outputField
    else{
            console.log(data)
          }
  //     if(coinSe === "litecoin" && currSe === "EUR"){
  //       outputField = profitPercent/liteone;
  //       console.log("litecoin" + outputfield)
  //
  //     };
  //
  // document.getElementById("asset-input-4").value = outputField;

      // var outputField= profitPercent/coival;

  // })
  //
  // dpDownA.addEventListener("change",test(){
  //
  // })
  //
  // dpDownB.addEventListener("change",test(){
  //
  // })

});
};
function newref(){
  var coinSet = document.getElementById('selectedCoin').value;

  console.log(coinSet);
  if (coinSet =="bitcoin"){
    var urlr= "/walletbtc";
    // document.location.href= urlr;
  }else
  if (coinSet =="litecoin"){
    var urlr= "/walletltc";
    // document.location.href= urlr;
  }else
  if (coinSet =="ethereum"){
    var urlr= "/walleteth";
    // document.location.href= urlr;
  }else
  if (coinSet =="polkadot"){
    var urlr= "/walletdot";
    // document.location.href= urlr;
  }else
  if (coinSet =="tether"){
    var urlr= "/wallettet";
    // document.location.href= urlr;
  }else
  if (coinSet =="fantom"){
    var urlr= "/walletftm";
    // document.location.href= urlr;
  }else
  if (coinSet =="binancecoin"){
    var urlr= "/walletbnb";
    // document.location.href= urlr;
  }else
  if (coinSet =="cardano"){
    var urlr= "/walletada";
    // document.location.href= urlr;
  }else
  if (coinSet =="solana"){
    var urlr= "/walletsol";
    // document.location.href= urlr;
  }else
  if (coinSet =="tron"){
    var urlr= "/wallettrx";
    // document.location.href= urlr;
  }else
  if (coinSet =="shiba-inu"){
    var urlr= "/walletshib";
    // document.location.href= urlr;
  }else
  if (coinSet =="dai"){
    var urlr= "/walletdai";
    // document.location.href= urlr;
  }else
  if (coinSet == "uds-coin"){
    var urlr= "/walletusd";
    // document.location.href= urlr;
  }else
  if (coinSet == "algorand"){
    var urlr= "/walletalgo";
    // document.location.href= urlr;
  };
document.location.href= urlr;
}
