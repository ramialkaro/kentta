import React from 'react'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = ({ text }) => <div>{text}</div>

const SimpleMap = () => {
    const defaultProps = {
        center: {
            lat: 59.59,
            lng: 30.33
        },
        zoom: 11,
    }
    return (
        <div style={{ height: '95vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAAVS-q5aDD3E4NsZxJojdXfR-eLBe7-oY'}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent 
                    lat ={59.955413}
                    lng ={30.337844}
                    text={"My Markerr"}
                />
            </GoogleMapReact>
        </div>
    )
}

export default SimpleMap