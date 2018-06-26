window.onload = function() {
//const Tx = require('ethereumjs-tx')
//var _ = require('lodash');

web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/w1eiQKdyzTaw3PUZqmNx`));


function sendRaw(rawTx){
	var privateKey = new Buffer('b1b92dc7b9eff14f16f43c72f26a76319754a4335f82410573440b128dd80ac3','hex');
	var tx = new EthTx(rawTx);
	console.log("TRANSACTION: ",tx);
	tx.sign(privateKey);
	var serializedTx = tx.serialize();
	console.log("SERIALIZED TRANSACTION: ",serializedTx.toString('hex'),tx);
	web3.eth.sendRawTransaction("0x"+serializedTx.toString('hex'), function(err, hash) {
				if (!err) {
				console.log(err);
	} else {

			console.log("hiii", err, hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
			//callback(err,hash);
		}
	});
}




/*
var ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"removedAmount","type":"uint256"}],"name":"removeToken","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
*/

var ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"removedAmount","type":"uint256"}],"name":"removeToken","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"}],"name":"resetMoney","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"retrieveMoney","outputs":[{"name":"money","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];



//var solidityFunction = new SolidityFunction('', _.find(ABI, { name: 'sendCoin' }), '');
//var ProviderEngine = require("web3-provider-engine");

	//web3Host    = 'localhost',
	//web3Port    = '8545';
/*


web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/w1eiQKdyzTaw3PUZqmNx`));

	var privateKey = new Buffer('889337f4c152021b346140bead71af37ce42d4cbcdf6a3c5f4d4317e74704c26','hex');

				var gasPrice = web3.eth.gasPrice;
				var gasPriceHex = web3.toHex(gasPrice);

				 console.log("GAS PRICE: ",gasPriceHex);
				var nonce = web3.eth.getTransactionCount("0x0D1386B12cb9D450DC7026383182169ce286ea35");//+ 1048576;
				var nonceHex = web3.toHex(nonce);
						console.log("NONCE: ",nonce);
				console.log("NONCE HEX: ",nonceHex);

				//GAS LIMIT ES IMPORTANTE
				var rawTx = {
					//5 "0x4"
				  nonce: nonceHex,
				///	nonce: 0x01,
				//	chainId: 3,
				  gasPrice: gasPriceHex,
				  gasLimit: '0x7A120',
				  to: '0x4f4e7e278263d37064716fe78d2139d1a4b9c8b5',
				//  value: '0x00',
				  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
				}

				//	Logger.info("rawTx in transaction", rawTx)
				var tx = new EthTx(rawTx);
				console.log("TRANSACTION",tx);
				tx.sign(privateKey);

				var serializedTx = tx.serialize()
				console.log(serializedTx.toString('hex'),tx)
				web3.eth.sendRawTransaction("0x"+serializedTx.toString('hex'), function(err, hash) {
						  if (!err) {
							console.log(err);
} else {

						console.log("hiii", err, hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
						//callback(err,hash);
					}
				});


*/

function transferirtokens(direccion,monto)
{
console.log("NONCE: ",web3.toHex(web3.eth.getTransactionCount("0x8d9B8199DDC71F84B25591fE2C4cB80733E0dF3c")));
var gasPrice = web3.eth.gasPrice;
var gasPriceHex = web3.toHex(gasPrice);
console.log("GAS PRICE: ",gasPriceHex);
var contractAddress = '0xED678c03E24C2Ee4E1cb2BE808B32751d40beCDB';
var txOptions = {
nonce: web3.toHex(web3.eth.getTransactionCount("0x8d9B8199DDC71F84B25591fE2C4cB80733E0dF3c")),
//nonce: 0x8,
gasPrice: gasPriceHex,
//gasLimit: '69CB5',
gasLimit: web3.toHex($("#limite_gas").val()),
to: contractAddress
}
var rawTx = lightwallet.txutils.functionTx(ABI, 'transfer',[direccion,monto], txOptions);
sendRaw(rawTx);
}


var contractAddress = '0xED678c03E24C2Ee4E1cb2BE808B32751d40beCDB';
//var tokenContract = web3.eth.contract(ABI).at(contractAddress);
/*tokenContract.methods.balanceOf('0x030562b8bA796470AC3590F27AB2Bc0C5524fa42').call().then(function(add){
	console.log('VALOR RETORNADO: ',add);
	if (add>0)
	{
		tokenContract.resetMoney('0x030562b8bA796470AC3590F27AB2Bc0C5524fa42');
	}
});*/

//StandardToken.deployed().then(console.log(StandardToken.balanceOf.call()));


//

/*
tokenContract.balanceOf.call("0x8d08E71b75c92D93b32D98aC746b2BEe0Ba5c604").then(function(balance) {
  // If this callback is called, the call was successfully executed.
  // Note that this returns immediately without any waiting.
  // Let's print the return value.
  console.log(balance.toNumber());
}).catch(function(e) {
  // There was an error! Handle it.
}) */


/*StandardToken.at(contractAddress).then(function(instance) {
  meta = instance;
	//return meta.balanceOf.call(account_one, {from: account_one});
  return meta.balanceOf.call("0x8d08E71b75c92D93b32D98aC746b2BEe0Ba5c604", {from: "0x8d08E71b75c92D93b32D98aC746b2BEe0Ba5c604"});
}).then(function(balance) {
  // If this callback is called, the call was successfully executed.
  // Note that this returns immediately without any waiting.
  // Let's print the return value.
  console.log(balance.toNumber());
}).catch(function(e) {
  // There was an error! Handle it.
});*/

StandardTokenInstance = StandardToken.at(contractAddress);
StandardTokenInstance.then(function(instance) {
    return instance.retrieveMoney.call('0x8d08E71b75c92D93b32D98aC746b2BEe0Ba5c604');
}).then(function(money) {
	//.toNumber()
    console.log(money.toNumber());
});


//var holdReturnValue = TokenContract.retrieveMoney('0x030562b8bA796470AC3590F27AB2Bc0C5524fa42');
//console.log('VALOR RETORNADO: ',holdReturnValue);

$("#success_transaction").hide();
$("#fail_transaction").hide();

//$("#input_direccion").val()



$("#button_retirar").click(function() {
var direccion = $("#direccion_billetera").val().toString();
var monto = parseInt($("#monto_billetera").val());
transferirtokens(direccion,monto);
$('#success_transaction').show();//.delay(3000).fadeOut();
});

/*

	var users = [];
	var i = 1;
	var j = 1;
	var items = [];
	var itemsnormal = [];
	var itemsdivide = [];
	var itemsmerge = [];
	var items_detailed = [];
	var all_transfers = [];

	var accounts = web3.eth.accounts;
	var StandardTokenInstance;


	var account = web3.eth.accounts[3];
	var accountInterval = setInterval(function() {
	  if (web3.eth.accounts[0] !== account) {
	    account = web3.eth.accounts[0];
	    //updateInterface();
	  }
	}, 100);




StandardToken.new(1000000,{from: account, gas: 4041592}).then(
  function(adm) {
    StandardTokenInstance = adm;
      $("#contract_address").val(StandardTokenInstance.address);
});


*/

//StandardToken.StandardToken(1000000);



//var accountSelect = document.getElementById("account_list");

//	accounts.forEach(function(account) {
//		var option = document.createElement("option");
//		option.text = account;
//		option.value = account;
//		accountSelect.add(option);
//  });






//Handle the HTML components visualization

//function connectContract(){
//	StandardTokenInstance = SupplyChain.at($("#contract_address_connect").val());
//	$("#contract_address").val(StandardTokenInstance.address);
//	$('#success_connect_contract').show().delay(3000).fadeOut();
//}
//Update Tables content
	// Functions
  function retirar(){
    console.log("BOTON" );
    StandardTokenInstance.transfer($("#input_direccion").val(),parseInt($("#input_monto").val()),{ gas: 3141592, from: accounts[0]});
  }
	// Wire up the UI elements
//Button actions

};
