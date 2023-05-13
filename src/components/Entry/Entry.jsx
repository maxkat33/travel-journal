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
        } } >
      </div>
      <div className='entry--body'>
        <div className='entry--location-info small-txt'>
          <div className='map-icon'>
            <MapIcon />
          </div>
          <h5 className='location light-txt'>{props.entry.location}</h5>
          <a className='google-maps' href={props.entry.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='entry--title bold-txt'>{props.entry.title}</h1>
        <h4 className='small-txt bold-txt'>{props.entry.startDate} - {props.entry.endDate}</h4>
        <p className='entry--description small-txt light-txt'>{props.entry.description}</p>
      </div>
    </section>
  )
}

export default Entry