var express = require('express');
var bodyParser = require("body-parser");

var productList = require('./data/products.json');   

var app = express();

var counter=0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, function () {
  console.log('server listening on port 3000. please open localhost:3000')
})

app.get('/getproducts', function(req,res){
  res.json(filterByFilter(counter));
})

app.post('/getCardDataByFilter' , function(req,res){
	var filterType=req.body.filterType;
		res.json( filterByNext(filterType));
})

function filterByNext(filterType){
	//console.log(filterType);
if (filterType === "prev")
    counter-- ; 
    else
     counter++;

  	 return filterByFilter(counter); 
}

function filterByFilter(counter){
	var filteredProducts= [];
	for (var i = counter*3; i < (counter+1)*3 && i< productList.length ; i++) {
		filteredProducts.push(productList[i])
	}
		return filteredProducts;
}