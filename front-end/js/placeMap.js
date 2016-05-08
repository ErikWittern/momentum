import React from 'react'

var PlaceMap = React.createClass({
  componentDidMount: function () {
    var latLng = {lat: this.props.lat, lng: this.props.lng}

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: latLng
    })

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: this.props.name
    })
  },

  render: function () {
    return (
      <div id='map'></div>
    )
  }
})

export {PlaceMap}
