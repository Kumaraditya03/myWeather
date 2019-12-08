var http=require('http');
var url = "http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=d572465715035d423880c2c70de3b469&units=metric";
var server = http.createServer(function(request,response){
var request = require('request');
request(url,function(err,res,body){
    var data = JSON.parse(body);
    response.write("<html><body><div id='container'>");
    response.write("<h1>"+ 'City Name: ' +data['name']+'<br>'+"</h1>");
    response.write("<h1>"+ 'Country: '+data.sys['country']+'<br>'+'</h1>');
    response.write("<h1>"+ 'Temperature: '+data.main['temp']+'<br>'+'</h1>');
    //response.write('<p>'+"hi"+'</p>');
    response.write("</div></body></html>");
    console.log(body);




//response.write('hi');
response.end();
});
}).listen(8080);