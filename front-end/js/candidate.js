import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

var Candidate = React.createClass({
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
    console.log(intention)
  },

  render () {
    var voteUi
    if (this.state.expanded) {
      voteUi = (<div>
        <Nav bsStyle='pills' activeKey={1} onSelect={this.handleSubmit}>
          <NavItem eventKey={'eat'}>eat</NavItem>
          <NavItem eventKey={'dring'}>dring</NavItem>
          <NavItem eventKey={'explore'}>explore</NavItem>
          <NavItem eventKey={'party'}>party</NavItem>
        </Nav>
      </div>)
    }

    return (
      <div>
        <h3 onClick={this.handleClick}>{this.props.data.name}</h3>
        {voteUi}
      </div>
    )
  }
})

export { Candidate }
