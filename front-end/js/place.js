import React from 'react'

var Place = React.createClass({
  render: function() {
    return (
      <div className="place">
        <h3 className="placeName">
          {this.props.name}
        </h3>
      </div>
    );
  }
});

export {Place}
