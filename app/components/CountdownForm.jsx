var React = require('react');

var CountdownForm = React.createClass({

  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds) {
      var formatedSeconds = this.formatString(strSeconds);
      this.refs.seconds.value = '';
      this.props.onSetCountdown(formatedSeconds);
      console.log(formatedSeconds);
    }
  },


  render: function() {
    return (
      <div>
        <form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
          <input type='text' ref='seconds' placeholder="Enter time" />
          <button className='button expanded'>Start</button>
        </form>
      </div>
    );
  },


  formatString: function(input) {

    if (!isNaN(Number(input)) ) { return parseInt(input, 10); }

    if (typeof input == 'string') {

      // convert to lower case
      input = input.toLowerCase();

      // replace "minutes" with "min" and "seconds" with "sec" if they exist
      input = input.replace("minutes", "min");
      input = input.replace("minute", "min");
      input = input.replace("mins", "min");
      input = input.replace("seconds", "sec");
      input = input.replace("second", "sec");
      input = input.replace("secs", "sec");

      // remove other characters
      input = input.replace(",", "");

      // use regex to remove spaces
      input = input.replace(/\s+/g, '');

      // now parse the data -- should be in the format 'xminysec'
      // find 'min' part, get number before it

      var whereIsMin = input.indexOf('min');
      if (whereIsMin >= 0) {
        var minutes = Number(input.slice(0, whereIsMin));
        input = input.slice(whereIsMin + 3); // +3 to account for 'min'
      } else {
        var minutes = 0;
      }

      console.log(minutes);

      // now find seconds
      var whereIsSec = input.indexOf('sec');
      if (whereIsSec >= 0) {
        var seconds = Number(input.slice(0, whereIsSec));
      } else {
        var seconds = 0;
      }

      console.log(seconds);

      if (isNaN(minutes) || isNaN(seconds)) {
        return 0;
      } else {
        return 60*minutes + seconds;
      }

    } else {
      return 0;;
    }
  }
})



module.exports = CountdownForm;
