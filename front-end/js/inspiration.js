import React from 'react'
import { PlaceList } from './placeList'

var Inspiration = React.createClass({
  render () {
    return (
      <div>
        <h2>
          As a <span className='momentum-status'>{this.props.status} </span>
          in <span className='momentum-place'>{this.props.neighborhood} </span>
          this <span className='momentum-time'>{this.props.day} {this.props.time} </span>

          you should <span className='momentum-intention'>{this.props.intention}</span>
        </h2>

        <PlaceList data={this.props.neighborhood} />
      </div>
    )
  }
})

export {Inspiration}
