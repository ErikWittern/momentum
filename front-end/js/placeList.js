import React from 'react'
import { Place } from './place'

var request = require('superagent')

var PlaceList = React.createClass({
  getInitialState: function() {
      return {data: []};
    },

  componentDidMount : function() {
    request
      .get('/places.json')
      .end(function (err, res) {
        if (err) return
        console.log(res)
        this.setState({data: res.body});
      }.bind(this))
  },
  render: function() {
        var placeNodes = this.state.data.map(function(place) {
          return (
            <Place name={place.name} key={place.name} />
          );
        });
        return (
          <div className="placeList">
            {placeNodes}
          </div>
        );
      }

})

export {PlaceList}
