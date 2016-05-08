import React from 'react'

var Welcome = React.createClass({
  propTypes: {
    neighborhood: React.PropTypes.string
  },

  handleClick (intention) {
    this.props.onIntentionSelection(intention)
  },

  render () {
    var content
    if (this.props.neighborhood) {
      content = (
        <h2>
          Right now, I want
          to <span className='momentum-link momentum-eat' intention={'eat'} onClick={this.handleClick.bind(null, 'eat')}>eat</span>
          , <span className='momentum-link momentum-drink' intention={'drink'} onClick={this.handleClick.bind(null, 'drink')}>drink</span>
          , <span className='momentum-link momentum-explore' intention={'explore'} onClick={this.handleClick.bind(null, 'explore')}>explore</span>
          , <span className='momentum-link momentum-party' intention={'party'} onClick={this.handleClick.bind(null, 'party')}>party</span>
        </h2>)
    } else {
      content = (
        <h2>
          Right now, I want
          to <span className='momentum-deactive'>eat</span>
          , <span className='momentum-deactive'>drink</span>
          , <span className='momentum-deactive'>explore</span>
          , <span className='momentum-deactive'>party</span>
        </h2>)
    }
    return (<div className='momentum-welcome-container'>{content}</div>)
  }
})

export { Welcome }
