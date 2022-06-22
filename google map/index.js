var mylatlng = {lat:38.3460, lng:-0.4907}
var mapOptions ={
    center : mylating,
    zoom : 7,
    mapTypeId : googls.maps.mapTypeId.ROADMAP
}

var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions)
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsDisplay();
directionsDisplay.setmap(map)

function calcRoute(){
    var request = {
        origin : document.getElementById("from").value,
        destination : document.getElementById("to").value,
        travelMode : googls.maps.TravelMode.DRIVING,
        unitSystem : googls.maps.UnitSystem.IMPERIAL
    }

    directionsService.route(request,(result,status)=>{
        if(status == google.maps.DirectionsStatus.OK){
            const output = document.querySelector("#output");
            output.innerHTML="<div class='alert-info'> From: " + document.getElementById("from").value +"<br/>To:"+document.getElementById("to").value+".<br/>Driving distance :" + result.routes[0].legs[0].distance.text + "<br/>Duration :" + result.routes[0].legs[0].duration.text +". </div>"

            directionsDisplay.setDirections(result)
        } 
        else{
            directionsDisplay.setDirections({ routes:[]})
            map.setCenter(myLatLang)
            output.innerHTML="<div class='alert-danger'>could not retrieve driving distance. </div>";
        }
    })
}

var options = {
    types:['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1,options)

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2,options)