import React from 'react'

import MapIcon from './MapIcon'

const Entry = (props) => {
  console.log(props.entry.imageUrl)
  return (
    <section>
      <div 
        className='entry--img' 
        style={ {
          backgroundImage: `url(${props.entry.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } }
      ></div>
      <div className='entry--body'>
        <div className='entry--location-info'>
          <div className='map-icon'>
            <MapIcon />
          </div>
          <h5 className='location'>{props.entry.location}</h5>
          <a className='google-maps' href={props.entry.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='entry--title'>{props.entry.title}</h1>
        <h4 className='entry--date'>{props.entry.startDate} - {props.entry.endDate}</h4>
        <p className='entry--description'>{props.entry.description}</p>
      </div>
    </section>
  )
}

export default Entry