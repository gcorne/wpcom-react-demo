var React = require( 'react' ),
	App = require( './components/app' ),
	config = require( '../config/config.json' );

window.React = React;

React.render(
	React.createElement(App, config ),
	document.getElementById('content')
);

