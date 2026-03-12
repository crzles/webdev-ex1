// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.

var xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.onload = "https://randomuser.me/api/"
document.getElementById(".next").addEventListener("click",
    function() {xhr.send(data)},
    false
);

$.get("./data/user.json", function(response){

});
