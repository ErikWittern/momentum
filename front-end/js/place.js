import React from 'react'
import { PlaceMap } from './placeMap'

var Place = React.createClass({
  render: function () {
    return (
      <div className='momentum-place'>
        <h2 className='placeName'>
          {this.props.name}
        </h2>
        <PlaceMap name={this.props.name} google_place_id={this.props.google_place_id} />
      </div>
    )
  }
})

export {Place}
