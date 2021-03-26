
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
        
        var my=op(i.name,i.latlng);
        //console.log(my)
    }
}
var op = function(name,k){
    
    var url ='https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat='+k[0]+'&lon='+k[1]+'&appid=2763a39fbc86d26a153207b29f969309'
    var req1=new XMLHttpRequest();
    req1.open('GET',url,true);
    req1.send();
    req1.onload=function(){
        var t=JSON.parse(this.response)
        
            x=t.main
            console.log([...k,name,x.temp])
           
        
        
    }
}
