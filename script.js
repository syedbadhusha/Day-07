//Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var countris_Asia = res.filter((ele)=>ele.region==="Asia")
    var countries_Asia_Name = countris_Asia.map((ele)=> ele.name);
    console.log("Get all the countries from Asia continent /region using Filter function")
    console.log(countries_Asia_Name)
}

//// Get all the countries with a population of less than 2 lakhs using Filter function
var reqpop = new XMLHttpRequest();
reqpop.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
reqpop.send();
reqpop.onload = function(){
    var res = JSON.parse(reqpop.response);
    var countris_twolacks = res.filter((ele)=>ele.population<=200000);
    var countris_twolacks_Name = countris_twolacks.map((ele)=> ele.name);
    console.log("Get all the countries with a population of less than 2 lakhs using Filter function")
    console.log(countris_twolacks_Name);
}

///// Print the following details name, capital, flag, using forEach function

var reqforeach = new XMLHttpRequest();
reqforeach.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
reqforeach.send();
reqforeach.onload = function(){
    var res = JSON.parse(reqforeach.response);
    console.log("Print the following details name, capital, flag, using forEach function")
    res.forEach((ele)=>console.log(`Country Name : ${ele.name}, Country Capital : ${ele.capital[0]}, Country Flag ${ele.flag}`))
}

//// Print the total population of countries using reduce function

var reqTotPopulation = new XMLHttpRequest();
reqTotPopulation.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
reqTotPopulation.send();
reqTotPopulation.onload = function(){
    var res = JSON.parse(reqTotPopulation.response)
    var totalPop = res.reduce((acc,cv)=>(acc+cv.population),0);
    console.log(`|Total Population of all countries : ${totalPop}`);
}

///// Print the country that uses US dollars as currency
var reqUSDollar = new XMLHttpRequest();
reqUSDollar.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
reqUSDollar.send();
reqUSDollar.onload = function(){
    var res = JSON.parse(reqUSDollar.response)
    var resUSDollar = res.filter((ele)=>ele.currencies[0].code === "USD")
    var countries_resUSDollar = resUSDollar.map((ele)=>ele.name);
    console.log("Print the country that uses US dollars as currency");
    console.log(countries_resUSDollar);
}


