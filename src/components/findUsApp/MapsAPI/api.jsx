import React, {useCallback, useState} from 'react';
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";


const containerStyle = {
    width: '400px',
    height: '400px'
};


export const Carte = ({jour}) => {
    const { adresse } = jour
    const {lat, lng } = adresse

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAhCBXrlV6JD2dS32l2aXPXG4O8A7C3szw"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
                lat: lat,
                lng: lng
            }}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
};
