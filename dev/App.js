var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="header">NoteBoard</h1>
        <Board />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
