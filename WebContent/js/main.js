/**
 * 
 */

const serverUrl="https://a0powj1kc1ts.usemoralis.com:2053/server";
const appId="ddH7sF6jHF8CmBwfzY9wZiVOGA6DxfIuQ0eSeVEd";

//We can only pass variable names here. Not strigns.
//also the var names should be exactly the one mentioned below. other names will not work.
Moralis.start({serverUrl, appId});
async function login(){
	let user=Moralis.User.current();
	if(!user){
		user=await Moralis.Web3.authenticate();
	}
	Moralis.enableWeb3();
	console.log(`Logged in user ${user.get("ethAddress")}`);
	getStats();
}

async function logout(){
	await Moralis.User.logOut();
	console.log("user logged out");
	
}

async function getStats(){
	const user = Moralis.User.current();
	if(user){
		getUsertransactions(user);
	}
}

async function getUsertransactions(user){
	const query=new Moralis.Query("EthTransactions");
	query.equalTo("to_address", user.get("ethAddress"));
	const result=await query.find();
	console.log(result);
}

async function donateCoffee(){
	let options={
		contractAddress:"0x4Ae8EE7456c92C36CFF179ad59f9A7961BDEA236",
		functionName:"buyCoffee",
		abi:[{      "inputs": [        {          "internalType": "string",          "name": "_name",          "type": "string"        },        {          "internalType": "string",          "name": "_message",          "type": "string"        }      ],      "name": "buyCoffee",      "outputs": [],      "stateMutability": "payable",      "type": "function"    }],
		params:{
			_name: "Devendra",
			_message: "Wow thats great"
		},
		msgValue: Moralis.Units.ETH(0.001)
	};
	await Moralis.executeFunction(options);
	console.log("Donation done!!");
}

document.getElementById("button-login").onclick=login;
document.getElementById("button-getstats").onclick=getStats;
document.getElementById("button-donate-coffee").onclick=donateCoffee;
document.getElementById("button-logout").onclick=logout;




//Get stats on page load;
getStats();