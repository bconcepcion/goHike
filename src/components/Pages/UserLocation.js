import React, {useState, useEffect} from 'react';
import ParkMap from './ParkMap'
import StateDropdown from './StateDropdown'



const UserLocation = (props) =>{

    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    })

    const [address, setAddress] = useState({
        latitude: null,
        longitude: null,
        address: null
    })

    const findLocation =()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getCoordinates)
        }else{
            alert("Unsupported browser")
        };
    }

    const getCoordinates=(position)=>{  
        console.log(position)
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    useEffect(() => {
        findLocation();
      
    }, [])


  
    return (
      <div>
            {location.latitude && <ParkMap latitude={location.latitude} longitude={location.longitude} />}
      </div>
     );
  
}

export default UserLocation
