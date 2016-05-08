/**
 * Main file containing the root of our app.
 **/
import ReactDOM from 'react-dom'
import React from 'react'
import { Welcome } from './welcome'
import { Inspiration } from './inspiration'
import { Inspire } from './inspire'
import { Grid, Row, Image } from 'react-bootstrap'
import { Navigation } from './navigation'
var request = require('superagent')

var MomentumApp = React.createClass({
  constants: {
    neighborhoodUrl: 'https://maps.googleapis.com/maps/api/geocode/json?&latlng='
  },

  getInitialState () {
    return {
      currentView: 'welcome',
      lat: null,
      lng: null,
      neighborhood: null,
      day: null,
      time: null,
      intention: null,
      status: 'novice'
    }
  },

  handleWelcomeSelection (intention) {
    this.setState({intention: intention, currentView: 'inspiration'})
  },

  componentDidMount () {
    this.requestCurrentPosition()
    this.getDayAndTime()
  },

  handleNav (selectedKey) {
    this.setState({currentView: selectedKey})
  },

  requestCurrentPosition () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (location) {
        this.setState({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
        console.log(location.coords.latitude, location.coords.longitude)
        this.getNeighborhood(location.coords.latitude, location.coords.longitude)
      }.bind(this))
    }
  },

  getNeighborhood (lat, lng) {
    var self = this
    request
      .get(this.getNeighborhoodUrl(lat, lng))
      .end(function (err, res) {
        if (err) return
        var hood
        if (res.body.results.length > 0) {
          for (var i in res.body.results[0].address_components) {
            var locObj = res.body.results[0].address_components[i]
            if (locObj.types.indexOf('neighborhood') !== -1) {
              hood = locObj.long_name
              break
            }
          }
          if (!hood) {
            for (var j in res.body.results[0].address_components) {
              var locObj2 = res.body.results[0].address_components[j]
              if (locObj2.types.indexOf('political') !== -1) {
                hood = locObj2.long_name
                break
              }
            }
          }
        }
        self.setState({neighborhood: hood})
      })
  },

  getNeighborhoodUrl (lat, lng) {
    return this.constants.neighborhoodUrl + lat + ',' + lng
  },

  getDayAndTime () {
    var d = new Date()
    var weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    var time = [
      'night', 'night', 'night', 'night', 'night', // 12 am - 5 am
      'morning', 'morning', 'morning', 'morning', 'morning', 'morning', 'morning', // 5 am - 12 pm
      'afternoon', 'afternoon', 'afternoon', 'afternoon', 'afternoon', 'afternoon', // 12 pm - 6 pm
      'evening', 'evening', 'evening', 'evening', // 6 pm - 10 pm
      'night', 'night' // 10 pm - 12 am
    ]
    this.setState({day: weekday[d.getDay()]})
    this.setState({time: time[d.getHours()]})
  },

  handleRecSubmit (name) {
    this.setState({currentView: 'welcome'})
  },

  render () {
    var page
    switch (this.state.currentView) {
      case 'welcome':
        page = <Welcome
          onIntentionSelection={this.handleWelcomeSelection}
          neighborhood={this.state.neighborhood} />
        break
      case 'inspiration':
        page = (<Inspiration
          day={this.state.day}
          time={this.state.time}
          neighborhood={this.state.neighborhood}
          intention={this.state.intention}
          status={this.state.status} />)
        break
      case 'inspire':
        page = <Inspire
          lat={this.state.lat}
          lng={this.state.lng}
          neighborhood={this.state.neighborhood}
          day={this.state.day}
          time={this.state.time}
          handleRecSubmit={this.handleRecSubmit} />
        break
    }

    return (
      <Row>
        <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4'>
          <Image src='/logo_small.png' />

          <Navigation
            neighborhood={this.state.neighborhood}
            currentView={this.state.currentView}
            handleNav={this.handleNav} />

          {page}
        </div>
      </Row>
    )
  }
})

ReactDOM.render(
  <MomentumApp />,
  document.getElementById('momentum_app')
)
