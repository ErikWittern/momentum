import React from 'react'

var Welcome = React.createClass({
  handleClick (intention) {
    this.props.onIntentionSelection(intention)
  },

  render () {
    return (
      <div>
        <h2>
          Right now, I'd like
          to <span intention={'eat'} onClick={this.handleClick.bind(null, 'eat')}>eat</span>
          , <span intention={'drink'} onClick={this.handleClick.bind(null, 'drink')}>drink</span>
          , <span intention={'explore'} onClick={this.handleClick.bind(null, 'explore')}>explore</span>
          , <span intention={'party'} onClick={this.handleClick.bind(null, 'party')}>party</span>
        </h2>
      </div>
    )
  }
})

export { Welcome }
