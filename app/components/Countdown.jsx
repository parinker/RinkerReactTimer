var React = require('react');
var Instructions = require('Instructions');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getInitialState: function() {
    return {count: 0};
  },

  handleSetCountdown: function(seconds) {
    this.setState({count: seconds});
  },

  render: function() {
    var {count} =  this.state;

    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
        <Instructions />
      </div>
    );
  }
});

module.exports = Countdown;
