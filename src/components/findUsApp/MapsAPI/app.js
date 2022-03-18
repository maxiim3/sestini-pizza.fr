
const mardi = document.querySelector('#mardi')
const mercredi = document.querySelector('#mercredi')
const vendredi = document.querySelector('#vendredi')
const tousLesJours = document.querySelector('#tous')

const zoomDefault = 9
const lattitudeDefualt = 43.505266110510206
const longitudeDefault = 3.8319666263151193

const coordonates = {
    zoom: zoomDefault,
    lattitude : lattitudeDefualt,
    longitude : longitudeDefault
}

const days = [mardi, mercredi, vendredi, tousLesJours]
for (let day of days) {

    day.onclick= () => {
        if(day.value === 'mardi') {
            coordonates.lattitude = 43.62678472499031
            coordonates.longitude = 3.889072859566412
            coordonates.zoom = 14
        }
        else if(day.value === 'mercredi') {
            coordonates.lattitude = 43.56270350456003
            coordonates.longitude = 3.895698062582045
            coordonates.zoom = 14
        }
        else if(day.value === 'vendredi') {
            coordonates.lattitude = 43.40312952723294
            coordonates.longitude = 3.6952177718677492
            coordonates.zoom = 14
        }
        else if (day.value === 'tous') {
             coordonates.lattitude = lattitudeDefualt
             coordonates.longitude = longitudeDefault
            coordonates.zoom = zoomDefault
        }
        console.log(coordonates);
        initMap()
    }

}
function initMap() {
    // const  coordonates = days.forEach(day => { if (day.checked) day.value } )
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: coordonates.zoom,
        center: {lat: coordonates.lattitude, lng: coordonates.longitude},
    });

    const apiKey = 'YOUR_API_KEY';
    const infoWindow = new google.maps.InfoWindow();

    // Load the stores GeoJSON onto the map.
    map.data.loadGeoJson('stores.json', {idPropertyName: 'storeid'});

    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
        const category = event.feature.getProperty('category');
        const name = event.feature.getProperty('name');
        const description = event.feature.getProperty('description');
        const hours = event.feature.getProperty('hours');
        const phone = event.feature.getProperty('phone');
        const position = event.feature.getGeometry().get();
        const content = `
        <h2>${name}</h2><p>${description}</p>
        <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
      `;

        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
        infoWindow.open(map);
    });
}

