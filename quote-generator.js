//The call to the API will return 1 random quote from a famous movie or person in JSON format.

var newColor = "";

$(document).ready(function() {
    $(".quote-button").click(function() {
        //alert("Hello");
         var output = $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com', // The URL to the API. You can get this in the API page of the API you intend to consume
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function(data) { 
                console.log(data);        
                
                newColor = randomColor();
                console.log(newColor);
                //$("body, .quote-button").css({"background-color": newColor, "color": newColor}); works
                $("body, button").css({"background-color": newColor, "color": newColor}); 
         
                document.getElementById("quote").innerHTML = '" ' + data.quote + ' "';
                document.getElementById("author").innerHTML = "--  " + data.author;
            },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "l75xvt8EmDmshqIBu665D14qnTOZp1FiQHDjsnm7HimMyWWOIS"); // Enter here your Mashape key
            }
        }); 

    }) 
});


function randomColor() {

    // Will create a string containing random RGB color value.
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    newColor = "rgb" + "(" + red + ", " + green + ", " + blue + ")";
    console.log(newColor);
    return (newColor);
    
}