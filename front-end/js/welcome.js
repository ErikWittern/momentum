import React from 'react'

var Welcome = React.createClass({
  propTypes: {
    neighborhood: React.PropTypes.string.isRequired
  },

  handleClick (intention) {
    this.props.onIntentionSelection(intention)
  },

  render () {
    var content
    if (this.props.neighborhood) {
      content = (
        <h2>
          Right now, I'd like
          to <span className='momentum-link' intention={'eat'} onClick={this.handleClick.bind(null, 'eat')}>eat</span>
          , <span className='momentum-link' intention={'drink'} onClick={this.handleClick.bind(null, 'drink')}>drink</span>
          , <span className='momentum-link' intention={'explore'} onClick={this.handleClick.bind(null, 'explore')}>explore</span>
          , <span className='momentum-link' intention={'party'} onClick={this.handleClick.bind(null, 'party')}>party</span>
        </h2>)
    } else {
      content = (
        <h2>
          Right now, I'd like
          to <span className='momentum-link momentum-deactive'>eat</span>
          , <span className='momentum-link momentum-deactive'>drink</span>
          , <span className='momentum-link momentum-deactive'>explore</span>
          , <span className='momentum-link momentum-deactive'>party</span>
        </h2>)
    }
    return (<div>{content}</div>)
  }
})

export { Welcome }
