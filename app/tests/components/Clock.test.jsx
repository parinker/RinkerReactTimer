var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

// helper function to render a Clock object and test to see if it returns
// the proper value
function clockValueExpect(seconds, expected) {
  return () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    expect(clock.formatSeconds(seconds)).toBe(expected);
  };
}

// TODO: I moved this functionality to CountdownForm, so move this to
// those tests!!!!
function clockFormatExpect(input, expected) {
  return () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    expect(clock.formatString(input)).toBe(expected);
  };
}

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

    describe('render', () => {
      it('should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();
        expect(actualText).toBe("01:02");
      });
    });

    describe('formatSeconds', () => {
        it('should format seconds', clockValueExpect(615, '10:15'));
        it('should format seconds when min/sec are less than 10', clockValueExpect(61, "01:01"));
        it('should return "00:00" if seconds are negative', clockValueExpect(-30, "00:00"));
        it('should return "00:00" if seconds are not a number', clockValueExpect('Hello, world!', '00:00'));
        }
      );

    describe('formatString', () => {
        it('should work correctly with numbers', clockFormatExpect(65, '01:05'));
        it('should handle (x minutes y seconds) with casing correctly', clockFormatExpect('5 MiNuTes6 SeConD', '05:06'));
        it('should handle "x minutes" correctly', clockFormatExpect('5 MiNuTes', '05:00'));
        it('should handle "y seconds" correctly', clockFormatExpect('362 seconds', '06:02'));
        it('should handle "x min, y secs" correctly', clockFormatExpect('34 min, 18 secs', '34:18'));
      }
    );
  }
);
