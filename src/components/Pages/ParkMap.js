import React, {useState,useCallback} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import NationalParks from './NationalParks'
import StateDropdown from './StateDropdown'
import './Map.css'

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  

const ParkMap = (props) => {
  const [mystate, setMystate] = useState('')
  const [map, setMap] = useState(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPSAPI
  
      })
    
      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        const geocoder = new window.google.maps.Geocoder();
        console.log('geocoder :>> ', geocoder);

        map.fitBounds(bounds);
        // setMap(map)

        let latlng = {
            lat: props.latitude,
            lng: props.longitude,
        }

        console.log(`latlng`, latlng)

        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    let address = results[0];
                    console.log('address :>> ', address);
                    setMystate(address.address_components[5].short_name)
                    setMap(map)
                } else {
                    window.alert("No results found");
                }
            } else {
                window.alert("Geocoder failed due to: " + status);
            }
        });    
    }, [])

    const onUnmount = useCallback(function callback(map) {
      setMap(null)
  }, [])



    
      return isLoaded ? (
        <div>
           <h4>Take a Hike</h4>  
        <div className="map">
        <GoogleMap 
          mapContainerStyle={containerStyle}
          center={{
            lat: props.latitude,
            lng: props.longitude
          }}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          
          <></>
        </GoogleMap>
        </div>
        <StateDropdown />
        {mystate && <NationalParks mystate={mystate} />}
        </div>
    ) : <></>
}

export default React.memo(ParkMap)