import React from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

//import {GetMapKey} from '../../data/fetchData'


const GOOGLE_API_KEY = ''
export class SimpleMap extends React.Component {
  
    
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        coords:{
            lat: 60.2091,
            lng: 24.765166
        }
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {

        return (

            <Map
                style={{ height: '93vh', width: '100%' }}
                google={this.props.google} zoom={12}
                initialCenter={this.statecoords}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow

                    onOpen={this.windowHasOpened}
                    onClose={this.windowHasClosed}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>



            </Map>

        )
    }
}


export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
})(SimpleMap)
