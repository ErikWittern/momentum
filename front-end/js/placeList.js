import React from 'react'
import { Place } from './place'

var request = require('superagent')

var PlaceList = React.createClass({
  getInitialState: function() {
      return {data: [], currentRecommendation: 0}
    },

  componentDidMount : function() {
    request
      .get('/places.json')
      .end(function (err, res) {
        if (err) return
        console.log(res.body)
        this.setState({data: res.body})
      }.bind(this))
  },

  handleSubmit: function(e) {
      e.preventDefault();

      var currentRecommendation = this.state.currentRecommendation

      var newRecommendation;
      if(currentRecommendation < this.state.data.length - 1) {
        newRecommendation = currentRecommendation + 1
      } else {
        newRecommendation = 0
      }

      this.setState({currentRecommendation: newRecommendation})
    },

  render: function() {
      console.log(this.state.data)
        // var placeNodes = this.state.data.map(function(place) {
        //   return (
        //     <Place name={place.name} key={place.name} />
        //   );
        // });
        var place = this.state.data[this.state.currentRecommendation]
        if(place == undefined) return null

        return (
          <div>
            <Place name={place.name} google_place_id={place.google_place_id} key={place.name} lat={place.latitude} lng={place.longitude} />
            <a className="momentum-link" onClick={this.handleSubmit}>{this.getNextButtonText()}</a>
          </div>
        );
    },

    getNextButtonText: function() {
      var buttonText = ["Been there, done that", "I don't think so",
                        "Um, no thanks", "Maybe another time",
                        "Hm…no", "I'm not feeling it", "Nope",
                        "Really?", "Let's roll the dice again",
                        "Give me another", "Today ain't the day"]
      var min = 0
      var max = buttonText.length - 1
      return buttonText[Math.floor(Math.random() * (max - min + 1)) + min];
    }
})

export {PlaceList}
