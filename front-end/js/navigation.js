import React from 'react'

var Navigation = React.createClass({
  handleClick (view) {
    this.props.handleNav(view)
  },

  render () {
    var get
    var give
    if (this.props.currentView === 'inspiration' ||
      this.props.currentView === 'welcome') {
      get = (<span className='momentum-space'>Get</span>)
      if (this.props.neighborhood) {
        give = (<span className='momentum-link momentum-space' onClick={this.handleClick.bind(null, 'inspire')}>Give</span>)
      } else {
        give = (<span className='momentum-deactive momentum-space'>Give</span>)
      }
    } else {
      get = (<span className='momentum-link momentum-space' onClick={this.handleClick.bind(null, 'welcome')}>Get</span>)
      give = (<span className='momentum-space'>Give</span>)
    }

    return (
      <div className='momentum-nav-container'>
        <h2>
          {get}
          {give}
        </h2>
      </div>
    )
  }
})

export { Navigation }
