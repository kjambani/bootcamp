
//create an instance of xml http req
var req= new XMLHttpRequest();
//create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//SEND THE REQ
req.send();
//load the response
req.onload=function(){
    var data=JSON.parse(this.response)
    for(i of data){
        console.log(i.name)
    }
}
