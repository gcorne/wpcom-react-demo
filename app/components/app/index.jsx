var React = require( 'react' ),
	findWhere = require( 'lodash/collection/findWhere' ),
	Bloggers = require( '../bloggers' ),
	Content = require( '../content' ),
	Site = require( '../site' ),
	PostList = require( '../post-list' );


require( './style.scss' );

var App = React.createClass( {

	getInitialState: function() {
		return {
			selected: null
		};
	},

	onSelect: function( username ) {
		this.setState( { selected: username } );
	},

	getSite: function() {
		if ( ! this.state.selected ) {
			return;
		}

		return findWhere( this.props.bloggers, { username: this.state.selected } ).site;
	},

	render: function() {
		var site = this.getSite();

		return (
			<div className="app">
				<Bloggers
					bloggers={ this.props.bloggers }
					onSelect={ this.onSelect }
					selected={ this.state.selected }
				/>
				{ site ?
					<Content>
						<Site site={ site } />
						<PostList site={ site } />
					</Content>
				: null }
			</div>
		);
	}
} );

module.exports = App;

