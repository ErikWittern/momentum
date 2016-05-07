/**
 * Main file containing the root of our app.
 **/
import ReactDOM from 'react-dom'
import React from 'react'
import { Inspiration } from './inspiration'
import { Inspire } from './inspire'
import { Nav, NavItem } from 'react-bootstrap'

var MomentumApp = React.createClass({
  getInitialState () {
    return {
      currentView: 'inspiration'
    }
  },

  handleNav (selectedKey) {
    this.setState({currentView: selectedKey})
  },

  render () {
    var page
    switch (this.state.currentView) {
      case 'inspiration':
        page = <Inspiration />
        break
      case 'inspire':
        page = <Inspire />
        break
      default:
        page = <Inspiration />
        break
    }

    return (
      <div>
        <h1>Momentum App</h1>
        <Nav bsStyle='pills' activeKey={1} onSelect={this.handleNav}>
          <NavItem eventKey={'inspiration'}>Inspiration</NavItem>
          <NavItem eventKey={'inspire'}>Inspire</NavItem>
        </Nav>
        {page}
      </div>
    )
  }
})

ReactDOM.render(
  <MomentumApp />,
  document.getElementById('momentum_app')
)
