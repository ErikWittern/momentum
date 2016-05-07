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
      latitude: null,
      longitude: null,
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
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
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
        {this.state.neighborhood}
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
