/**
 * Main file containing the root of our app.
 **/
import ReactDOM from 'react-dom'
import React from 'react'
import { Inspiration } from './inspiration'
import { Inspire } from './inspire'
import { Nav, NavItem } from 'react-bootstrap'
var request = require('superagent')

var MomentumApp = React.createClass({
  constants: {
    neighborhoodUrl: 'https://maps.googleapis.com/maps/api/geocode/json?&latlng='
  },

  getInitialState () {
    return {
      currentView: 'inspiration',
      longitude: null,
      latitude: null,
      neighborhood: null
    }
  },

  componentDidMount () {
    this.requestCurrentPosition()
  },

  handleNav (selectedKey) {
    this.setState({currentView: selectedKey})
  },

  requestCurrentPosition () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (location) {
        this.setState({
          longitude: location.coords.longitude,
          latitude: location.coords.latitude
        })
      }.bind(this))
    }
  },

  getNeighborhood () {
    var self = this
    request
      .get(this.getNeighborhoodUrl(this.state.latitude, this.state.longitude))
      .end(function (err, res) {
        if (err) return

        self.setState({neighborhood: null})
      })
  },

  getNeighborhoodUrl (lat, lng) {
    return this.constants.neighborhoodUrl + lat + ',' + lng
  },

  render () {
    var page
    switch (this.state.currentView) {
      case 'inspiration':
        page = <Inspiration />
        break
      case 'inspire':
        page = <Inspire />
        break
      default:
        page = <Inspiration />
        break
    }

    return (
      <div>
        <h1>Momentum App</h1>
        {this.state.latitude},{this.state.longitude}        
        <Nav bsStyle='pills' activeKey={1} onSelect={this.handleNav}>
          <NavItem eventKey={'inspiration'}>Inspiration</NavItem>
          <NavItem eventKey={'inspire'}>Inspire</NavItem>
        </Nav>

        {page}
      </div>
    )
  }
})

ReactDOM.render(
  <MomentumApp />,
  document.getElementById('momentum_app')
)
