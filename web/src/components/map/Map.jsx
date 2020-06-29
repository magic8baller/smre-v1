import React from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import GoogleMapReact from 'google-map-react'
import './map.css'

const KEY='28a0ec734b168e1a79f145fd3d5cadaec834090e'

const LocationPin = ({text}) => (
	<div className="pin">
		<Icon icon={locationIcon} className="pin-icon" />
		<p className="pin-text">{text}</p>
	</div>
)


const Map = ({location, zoomLevel}) => {
	return (
		<div className='map'>
		<h2 className="map-h2">Come Visit Us At Our Campus</h2>

		<div className="google-map">
			<GoogleMapReact
				bootstrapURLKeys={{key: process.env.GATSBY_GOOGLE_MAPS_KEY}}
				defaultCenter={location}
				defaultZoom={zoomLevel}
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>
  </div>
	)
}

export default Map
