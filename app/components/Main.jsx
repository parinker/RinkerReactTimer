var React = require('react');
var Nav = require('Nav');
var applicationStyles = require('applicationStyles');

var Main = (props) => (
  <div>
    <div>
      <div>
        <Nav />
        <p>Main.jsx Rendered</p>
        {props.children}
      </div>
    </div>
  </div>
)

module.exports = Main;
