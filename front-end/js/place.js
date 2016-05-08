import React from 'react'
import { PlaceMap } from './placeMap'

var Place = React.createClass({
  render: function() {
    return (
      <div className="place">
        <h3 className="placeName">
          {this.props.name}
        </h3>
        <PlaceMap name={this.props.name} lat={this.props.lat} lng={this.props.lng} google_place_id={this.props.google_place_id} />
      </div>
    );
  }
});

export {Place}
