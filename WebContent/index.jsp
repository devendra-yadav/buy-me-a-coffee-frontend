<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link href="./css/styles.css" rel="stylesheet" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
<script src="https://unpkg.com/moralis/dist/moralis.js"></script>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<center>
	<img class="image-header" src="./img/black_coffee.jpg" width="200px" height="200px" align="center}""/>
	<h1>Buy Devendra a Coffee</h1>
	
	<button id="button-login">Connect to wallet</button>
	<button id="button-logout">Logout</button>
	<br>
	<button id="button-getstats">Refresh Stats</button>
	<button id="button-donate-coffee">Donate a coffee (0.001 ETH)</button>
	

	<script type="text/javascript" src="./js/main.js"></script>
</center>
</body>
</html>