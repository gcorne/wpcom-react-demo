var React = require( 'react' ),
	Gravatar = require( '../gravatar' );

var Bloggers = React.createClass( {
	render: function() {
		return (
			<div className="bloggers">
				{ this.props.bloggers.map( function( blogger ) {
					return (
						<Gravatar
							key={ blogger.username }
							username={ blogger.username }
							onSelect={ this.props.onSelect }
							selected={ blogger.username === this.props.selected }
							size={ 100 }
						/>
					);
				}, this ) }
			</div>
		);
	}
} );

module.exports = Bloggers;
