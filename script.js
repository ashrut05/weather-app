if (event.keyCode === 13) {
   document.getElementById("search-button").click();
  };

function getCity() {
    document.getElementById("icon").innerHTML = "";
    document.getElementById("weather").innerHTML = "";
    document.getElementById("temp").innerHTML = "";

    var city= document.getElementById("city").value;
    console.log(city);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f25c4a8b058a9f156f78b38c2c410bd9", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather=data.weather[0].main;
    var temp= Math.floor(data.main.temp);

    $("#icon").attr("src", icon);
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("temp").innerHTML = temp;

    document.getElementById("city").value = "";
    document.getElementById("weather-container").style.display="block";
    document.getElementById("search-box").style.display="none";
    document.getElementById("search-button").style.display="none";
});
};

function goBack() {
    document.getElementById("weather-container").style.display="none";
    document.getElementById("search-box").style.display="block";
    document.getElementById("search-button").style.display="block";
};