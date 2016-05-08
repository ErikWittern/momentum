import React from 'react'
var request = require('superagent')
import { Collapse } from 'react-bootstrap'

var Candidate = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    neighborhood: React.PropTypes.string.isRequired,
    day: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
    handleRecSubmit: React.PropTypes.func.isRequired
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

    request
      .post('/recommendations')
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) {
          console.log(err)
          return
        }
        console.log(res.body)
        this.props.handleRecSubmit(this.props.data.name)
      }.bind(this))
    // TODO: make call to post location...
  },

  render () {
    return (
      <div className='momentum-candidate'>
        <h3 onClick={this.handleClick} className='momentum-link'>{this.props.data.name}</h3>
        <Collapse in={this.state.expanded}>
          <div style={{ margin: 0 + 'px', padding: 0 + 'px' }}>
            <div className='momentum-vote-ui'>
              <h3 onClick={this.handleSubmit.bind(null, 'eat')} className='momentum-link momentum-eat momentum-space'>eat</h3>
              <h3 onClick={this.handleSubmit.bind(null, 'drink')} className='momentum-link momentum-drink momentum-space'>drink</h3>
              <h3 onClick={this.handleSubmit.bind(null, 'explore')} className='momentum-link momentum-explore momentum-space'>explore</h3>
              <h3 onClick={this.handleSubmit.bind(null, 'party')} className='momentum-link momentum-party momentum-space'>party</h3>
            </div>
          </div>
        </Collapse>
      </div>
    )
  }
})

export { Candidate }
