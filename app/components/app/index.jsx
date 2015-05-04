var React = require( 'react' ),
	findWhere = require( 'lodash/collection/findWhere' ),
	Gravatar = require( '../gravatar' ),
	Posts = require( '../posts' );

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
		return findWhere( this.props.friends, { username: this.state.selected } ).site;
	},

	render: function() {
		return (
			<div className="wrapper">
				<div className="gravatars">
					{ this.props.friends.map( function( friend ) {
						return (
							<Gravatar
								key={ friend.username }
								username={ friend.username }
								onSelect={ this.onSelect }
								selected={ friend.username === this.state.selected }
								size={ 100 }
							/>
						);
					}, this ) }
				</div>
				{ this.state.selected ?
					<Posts site={ this.getSite() } />
				: null }
			</div>
		);
	}
} );

module.exports = App;

