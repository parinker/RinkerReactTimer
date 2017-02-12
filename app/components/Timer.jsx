var React = require('react');
var Instructions = require('Instructions');

var Timer = React.createClass({

  render: function() {
    return (
      <div>
        <p>Timer component.</p>
        <Instructions />
      </div>

    );
  }
});

module.exports = Timer;
