//The call to the API will return 1 random quote from a famous movie or person in JSON format.

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





//$.ajax({
//    url: 'https://SOMEAPI.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
//    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
//    data: {}, // Additional parameters here
//    dataType: 'json',
//    success: function(data) { console.dir((data.source)); },
//    error: function(err) { alert(err); },
//    beforeSend: function(xhr) {
//    xhr.setRequestHeader("X-Mashape-Authorization", "YOUR-MASHAPE-KEY"); // Enter here your Mashape key
//    }
//});

