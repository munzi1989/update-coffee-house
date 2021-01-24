// Initialize and add the map
function initMap() {
    // The location of Kansas City
    const kc = { lat: 39.099, lng: -94.578 };
    // The map, centered at Kansas City
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: kc,
    });
    // The marker, positioned at Kansas City
    const marker = new google.maps.Marker({
        position: kc,
        map: map,
    });
}


function navMenu() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
