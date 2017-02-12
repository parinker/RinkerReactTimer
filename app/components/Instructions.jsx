var React = require('react');

var Instructions = React.createClass({

  render: function() {
    return (
      <div>
        <p>Try entering:</p>
        <ul>
          <li>65</li>
          <li>4 minutes, 45 seconds</li>
          <li>175 sec</li>
          <li>4mins2sec</li>
        </ul>
        Please don't enter seconds before minutes, or provide any extra text.
      </div>
    );
  }
});

module.exports = Instructions;
