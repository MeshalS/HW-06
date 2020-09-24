$(document).ready(function () {
    // use school key inorder to get forecast data
    const apiKey = "166a433c57516f51dfab1f7edaed8413";
    let url = 'https://api.openweathermap.org/data/2.5/';
    let requestType = ""; 
    let query ="";

// pull current location
$('#getWeather,#past-cities').on('click', function () {
    
    // get location from user input box
    //get the first click event 
    let e = $(event.target)[0];
    let location = "";
// trying to know which one of the selector from the click 
    if (e.id == "getWeather" ) {  
      location = $('#city-search').val().trim().toUpperCase();
      
    } 
    else if ( e.className === ("cityList") ) 
    {
      location = e.innerText;
    }

    // should make this generic to use this on the area clicked
    // let location = $(this).val().trim().toUpperCase();
    if (location == "") return;



})