import React, {useState} from 'react'


const idLocation = () =>{
    const [local, setlocal] = useState({
        latitude: null,
        longitude: null,
        userAddress: null,
    })

    findLocation (){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            alert("Unsupported browser")
        }
    }

    return(
        <button onClick={findLocaton}></button>
    )

}

export default idLocation