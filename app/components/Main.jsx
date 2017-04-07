import React from 'react';
// var Nav = require('Nav');
import Nav from './Nav';

var Main = React.createClass({
  render: function (){
    return(
      <div>
        <h2>Main Component</h2>
        <Nav />
      </div>

    )
  }
});

module.exports = Main;