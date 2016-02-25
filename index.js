$(document).ready(function(){

    // var test = document.getElementById("test").value;
    // var cityname = document.getElementById("test").value;
  var cityname;

    $('.submit-btn').click(function () {
      event.preventDefault()
      cityname = $('#test').val()
      console.log(cityname)
    if (cityname === "NYC" || cityname === "New York" || cityname === "NY") {
      $("body").css("background", "url(./images/nyc.jpg");
    };
  });



  $('.submit-btn').click(function () {
    event.preventDefault()
    cityname = $('#test').val()
    console.log(cityname)
  if (cityname === "SF" || cityname === "Bay Area") {
    $("body").css("background", "url(./images/sf.jpg");
  };
});


$('.submit-btn').click(function () {
  event.preventDefault()
  cityname = $('#test').val()
  console.log(cityname)
if (cityname === "LA" || cityname === "LAX") {
  $("body").css("background", "url(./images/la.jpg");
};
});


$('.submit-btn').click(function () {
  event.preventDefault()
  cityname = $('#test').val()
  console.log(cityname)
if (cityname === "Sydney" || cityname === "SYD") {
  $("body").css("background", "url(./images/sydney.jpg");
};
});

$('.submit-btn').click(function () {
  event.preventDefault()
  cityname = $('#test').val()
  console.log(cityname)
if (cityname === "Austin" || cityname === "ATX") {
  $("body").css("background", "url(./images/austin.jpg");
};
});




});
