import React, {useState, useEffect} from 'react'
import './Map.css'


function NationalParks(props) {  

    const NPS = `https://developer.nps.gov/api/v1/parks?q=hiking&stateCode=${props.mystate}&limit=100&api_key=${process.env.REACT_APP_NPS_APIKEY}`
    
    const [details, setDetails] = useState(null);
    
    const getNationalParks =()=> {
        fetch(NPS)
        .then(result=>{
            let parks = result.json()
            console.log(parks);
             return Promise.resolve(parks);
        })
        .then(info => {
            console.log(info.data)
            setDetails(info.data)
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    const logDetails = () => {
        console.log(details)
    }

useEffect(() => {
    getNationalParks()   
}, [])
   


    return (
        <div>
            <div>
                {details && details.map((item, idx) => {
                    return <div className="description">
                            <br></br>
                            <h5 style={{fontSize: "20px"}} key={idx}>{item.fullName}</h5>
                            <div><p style={{fontSize: "9px"}}>{item.description}</p></div>
                            <a className="visit" href={item.directionsUrl}>Plan Your Visit</a>
                            <br></br>
                            </div>
                })}
            </div>
            
        </div>
    )
}

export default NationalParks
