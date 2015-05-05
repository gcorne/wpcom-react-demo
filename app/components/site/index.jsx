var React = require( 'react' ),
	wpcom = require( 'wpcom' )();

require( './style.scss' );

var Site = React.createClass( {

	propTypes: {
		site: React.PropTypes.string.isRequired
	},

	getInitialState: function() {
		return {
			siteInfo: {}
		};
	},

	componentWillMount: function() {
		this._fetchSite( this.props.site );
	},

	componentWillReceiveProps: function( nextProps ) {
		if ( nextProps.site !== this.props.site ) {
			this._fetchSite( nextProps.site );
		}
	},

	_fetchSite: function( site ) {
		this.setState( {
			loading: true,
			siteInfo: {}
		} );
		wpcom.site( site ).get( function( error, response ) {
			if ( ! this.isMounted() || error ) {
				return;
			}
			this.setState( {
				loading: false,
				siteInfo: response
			} );

		}.bind( this ) );
	},

	render: function() {
		var siteInfo = this.state.siteInfo;
		return (
			<div className="site">
				<h2 className="site__title">{ siteInfo.name }</h2>
				<h3 className="site__description">{ siteInfo.description }</h3>
			</div>
		);
	}
} );

module.exports = Site;
