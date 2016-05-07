import React from 'react'

var Inspire = React.createClass({
  getInitialState () {
    return {
      candidates: null
    }
  },

  componentDidMount () {
    this.fetchPlaces()
  },

  fetchPlaces () {
    console.log('fetchPlaces')
    var lat = this.props.lat
    var lng = this.props.lng
    var types = ['restaurant']

    var location = new google.maps.LatLng(lat, lng)

    var request = {
      location: location,
      radius: '50',
      types: types
    }

    var map = new google.maps.Map(document.createElement('div'))
    var service = new google.maps.places.PlacesService(map)

    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({candidates: results})
      }
    })
  },

  render () {
    return (
      <h2>Inspire...</h2>
    )
  }
})

export { Inspire }
