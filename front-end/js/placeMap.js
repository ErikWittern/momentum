import React from 'react'

var PlaceMap = React.createClass({
  componentDidMount: function () {
    var request = {
      placeId: this.props.google_place_id
    }

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: {
        lat: 0,
        lng: 0
      }
    })

    var service = new google.maps.places.PlacesService(map)

    service.getDetails(request, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: this.props.name,
          zoomControl: false,
          scaleControl: false,
          mapTypeControl: false,
          streetViewControl: false
        })
        map.setCenter(place.geometry.location)
      }
    }.bind(this))
  },

  render: function () {
    return (
      <div id='map'></div>
    )
  }
})

export {PlaceMap}
