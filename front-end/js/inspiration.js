import React from 'react'
import { PlaceList } from './placeList'

var Inspiration = React.createClass({
  propTypes: {
    neighborhood: React.PropTypes.string.isRequired,
    day: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  },

  render () {
    var intention
    switch (this.props.intention) {
      case 'eat':
        intention = (<span className='momentum-eat'>{this.props.intention}</span>)
        break
      case 'drink':
        intention = (<span className='momentum-drink'>{this.props.intention}</span>)
        break
      case 'explore':
        intention = (<span className='momentum-explore'>{this.props.intention}</span>)
        break
      case 'party':
        intention = (<span className='momentum-party'>{this.props.intention}</span>)
        break
    }
    return (
      <div>
        <h2>
          As a <span className='momentum-status'>{this.props.status} </span>
          in <span className='momentum-place'>{this.props.neighborhood}</span>
          , this <span className='momentum-time'>{this.props.day} {this.props.time} </span>

          you should {intention} at
        </h2>

        <PlaceList neighborhood={this.props.neighborhood} day={this.props.day} time={this.props.time} intention={this.props.intention} />
      </div>
    )
  }
})

export {Inspiration}
