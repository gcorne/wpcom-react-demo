var React = require( 'react' ),
	wpcom = require( 'wpcom' )(),
	Post = require( '../post' );

var Posts = React.createClass( {

	propTypes: {
		site: React.PropTypes.string.isRequired
	},

	componentWillMount: function() {
		this._fetchPosts( this.props.site );
	},

	componentWillReceiveProps: function( nextProps ) {
		if ( nextProps.site !== this.props.site ) {
			this._fetchPosts( nextProps.site );
		}
	},

	_fetchPosts: function( site ) {
		this.setState( { loading: true } );
		wpcom.site( site ).postsList( function( error, response ) {
			if ( ! this.isMounted() || error ) {
				return;
			}
			this.setState( {
				loading: false,
				posts: response.posts
			} );

		}.bind( this ) );
	},

	renderPosts: function() {
		var posts = this.state.posts;

		if ( posts.length === 0 ) {
			return <p>No posts found</p>;
		}

		return posts.map( function( post ) {
			return <Post key={ post.global_ID } post={ post } />;
		} );
	},

	render: function() {

		return (
			<div className="posts">
				{ this.state.loading ? 
					<p>Loading...</p>
				 : this.renderPosts() }
			</div>
		);

	}

} );

module.exports = Posts;
