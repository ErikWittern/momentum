import React from 'react'

var Inspiration = React.createClass({
  render () {
    return (
      <div>
        <h2>
          As a <span className='momentum-status'>{this.props.status} </span>
          , this <span className='momentum-time'>{this.props.day} {this.props.time} </span>
          in <span className='momentum-place'>{this.props.neighborhood} </span>
          you should <span className='momentum-intention'>{this.props.intention}</span>
          ...
        </h2>
      </div>
    )
  }
})

export {Inspiration}
