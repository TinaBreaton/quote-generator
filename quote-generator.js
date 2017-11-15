//The call to the API will return 1 random quote from a famous movie or person in JSON format.

var quoteData = "";
var authorData = "";

getNewQuote();

$(document).ready(function() {
    $(".quote-button").click(function() {
        getNewQuote();
    }) 

    $("#tweet-quote").click(function() {

        var initURL = "https://twitter.com/intent/tweet?hashtags=freecodecamp,quotes&text=" 
        var urlStr = initURL.concat('"', quoteData, '"', '  -- ', authorData);
    
        window.open(urlStr, target = "_blank", 'width=550, height=400');
    })
});

function getNewQuote() {

    var newColor = "";

    var output = $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com', // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(resData) { 
           
            newColor = randomColor();
            $("body").css("background-color",  newColor); 
            $(".quote-button").css("background-color",  newColor); 
            $(".quote-box").css("color",  newColor); 
            $(".fa-twitter").css("background-color", newColor);    
               
            
            document.getElementById("quote").innerHTML = '" ' + resData.quote + ' "';
            document.getElementById("author").innerHTML = "--  " + resData.author;

            quoteData = resData.quote;
            authorData = resData.author;
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "l75xvt8EmDmshqIBu665D14qnTOZp1FiQHDjsnm7HimMyWWOIS"); // Enter here your Mashape key
        }
    }); 
}


function randomColor() {

    // Will create a string containing random RGB color value.
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    newColor = "rgb" + "(" + red + ", " + green + ", " + blue + ")";
    return (newColor);
    
}