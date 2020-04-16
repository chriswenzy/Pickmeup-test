import React, { useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Button} from 'react-bootstrap';



export const SimpleMap = () => {

    const style = {
        position: 'absolute',
       width: '100px',
        
        border: '4px solid #eef4f9;',
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3f51b5',
        fontSize: 13,
        fontWeight: 'bold',
        padding: 4
      };
      const centers = {lat:9.0546462,lng:7.2542662}
    const zoom = 12

    const [lat,setLat] = useState(59.955413)
    const [detail,setDetail] = useState(false)
    const [center,setCenter] = useState(centers)
    const [lng,setLng] = useState(30.337844)


    const details = ()=>{
      setDetail(!detail)
   }

    const AnyReactComponent = ({ text }) => <div style={style} onClick={details}>{text}</div>;

   

    
    // useEffect(()=>{

       
    // },[])

    const locateMe = () => {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const coords = await pos.coords;
          const location = {
            lat:coords.latitude,
            lng:coords.longitude
          }
          console.log(coords)
                setCenter(location)
              setLat(coords.latitude)
              setLng(coords.longitude)
        });
      }
    }

    

  return (
      <React.Fragment>
      <div style={{ height: '100vh', width: '100%' }}>
      <div>
          <Button className = "btn-locate" onClick={locateMe}>Locate me</Button>
        </div>
        {
          detail ?
          <span class="callout">
          lat={lat}, lng={lng}
          <b class="notch"></b>
      </span>:null
        }
      <GoogleMapReact
        center={center}
        defaultZoom={zoom}
       >
        <AnyReactComponent
          lat={lat}
          lng={lng}
          text={'Click location'}
        />
        
      </GoogleMapReact>
    </div>
      </React.Fragment>
 
  );
}