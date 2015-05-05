var React = require( 'react' ),
	jsonp = require( 'jsonp' ),
	classnames = require( 'classnames' );

require( './style.scss' );

var Gravatar = React.createClass( {

	propTypes: {
		username: React.PropTypes.string,
		selected: React.PropTypes.bool,
		size: React.PropTypes.number,
	},

	getDefaultProps: function() {
		return {
			size: 50,
			selected: false
		};
	},

	getInitialState: function() {
		return {};
	},

	componentWillMount: function() {
		jsonp( 'https://en.gravatar.com/' + this.props.username + '.json', function( error, response ) {
			if ( ! error && response ) {
				this.setState( { avatarURL: response.entry[0].thumbnailUrl } );
			}

		}.bind( this ) );
	},

	onClick: function( event ) {
		if ( this.props.onSelect ) {
			this.props.onSelect( this.props.username );
		}
	},

	render: function() {
		var size = this.props.size,
			avatarURL = this.state.avatarURL,
			className = classnames( {
				'gravatar': true,
				'is-selected': this.props.selected
			} );

		return (
			<div className={ className }>
				{ avatarURL ? 
					<img
						className="gravatar__image"
						onClick={ this.onClick }
						src={ avatarURL }
						width={ size }
						height={ size }
					/>
				: null }
			</div>
		);
	}

} );

module.exports = Gravatar;
