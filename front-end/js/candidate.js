import React from 'react'
var request = require('superagent')

var Candidate = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    neighborhood: React.PropTypes.string.isRequired,
    day: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  },

  getInitialState () {
    return {
      expanded: false
    }
  },

  handleClick () {
    if (this.state.expanded) {
      this.setState({expanded: false})
    } else {
      this.setState({expanded: true})
    }
  },

  handleSubmit (intention) {
    console.log(this.props.data)
    var data = {
      recommendation: {
        name: this.props.data.name,
        intention: intention,
        google_place_id: this.props.data.place_id,
        neighborhood: this.props.neighborhood,
        day: this.props.day,
        time: this.props.time
      }
    }
    console.log(data)

    request
      .post('/recommendations')
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Accepts', 'application/json')
      .end(function (err, res) {
        console.log(err, res)
      })
    // TODO: make call to post location...
  },

  render () {
    var voteUi
    if (this.state.expanded) {
      voteUi = (
        <div className='momentum-vote-ui'>
          <h3 onClick={this.handleSubmit.bind(null, 'eat')} className='momentum-link momentum-eat momentum-space'>eat</h3>
          <h3 onClick={this.handleSubmit.bind(null, 'drink')} className='momentum-link momentum-drink momentum-space'>drink</h3>
          <h3 onClick={this.handleSubmit.bind(null, 'explore')} className='momentum-link momentum-explore momentum-space'>explore</h3>
          <h3 onClick={this.handleSubmit.bind(null, 'party')} className='momentum-link momentum-party momentum-space'>party</h3>
        </div>)
    }

    return (
      <div className='momentum-candidate'>
        <h3 onClick={this.handleClick} className='momentum-link'>{this.props.data.name}</h3>
        {voteUi}
      </div>
    )
  }
})

export { Candidate }
