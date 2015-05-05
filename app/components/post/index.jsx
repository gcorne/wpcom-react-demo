var React = require( 'react' ),
	moment = require( 'moment' );

require( './style.scss' );

var Post = React.createClass( {

	render: function() {
		var post = this.props.post;
		return (
			<div className="post">
				<span className="post__date">{ moment( post.date ).format( 'MMMM Do, YYYY' ) }</span>
				<h3 className="post__title">
					<a
						className="post__title-link"
						href={ post.URL }
						dangerouslySetInnerHTML={ { __html: post.title || '(no title)' } }
					/>
				</h3>
			</div>
		);
	}

} );

module.exports = Post;
