import React from 'react'
import { Candidate } from './candidate'

var Inspire = React.createClass({
  propTypes: {
    lat: React.PropTypes.number.isRequired,
    lng: React.PropTypes.number.isRequired,
    neighborhood: React.PropTypes.string.isRequired,
    day: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  },

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

    var location = new google.maps.LatLng(lat, lng)

    var request = {
      location: location,
      radius: '100',
      types: ['restaurants', 'point_of_interest', 'amusement_park', 'art_gallery', 'bakery', 'bar', 'book_store', 'bowling_alley', 'cafe', 'casino', 'clothing_store', 'department_store', 'establishment', 'food', 'furniture_store', 'jewelry_store', 'library', 'liquor_store', 'meal_takeaway', 'movie_theater', 'museum', 'night_club', 'park', 'restaurant', 'shoe_store', 'shopping_mall', 'spa', 'stadium', 'store', 'university', 'zoo']
    }

    var map = new google.maps.Map(document.createElement('div'))
    var service = new google.maps.places.PlacesService(map)

    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({candidates: results})
      }
    }.bind(this))
  },

  render () {
    var cands
    if (!this.state.candidates) {
      cands = (<h1>Working on it...</h1>)
    } else if (this.state.candidates.length === 0) {
      cands = (<h1>Couldn't find a place!</h1>)
    } else {
      var i = 0
      cands = this.state.candidates.map(e => {
        return (<Candidate data={e} key={i++} neighborhood={this.props.neighborhood} day={this.props.day} time={this.props.time} />)
      })
    }

    return (
      <div>
        <h2>This <span className='momentum-time'>{this.props.day} {this.props.time}</span> in <span className='momentum-place'>{this.props.neighborhood}</span>, I want to give Momentum to...</h2>
        {cands}
      </div>
    )
  }
})

export { Inspire }
