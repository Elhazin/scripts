const wheather = require('wheather-js');


wheather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
    console.log(JSON.stringify(result, null, 2));
});


token 

url  = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9f4b3b7c4b0c4b3b7c4b0c4b3b7c4b0c'