import React, {Component} from 'react';
import {connect } from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class PostsShow extends Component {
    render(){
        const {post} = this.props;

        if(!post)
            return(<div>Loading</div>);
        return(
            <div>
            <Link to="/">Back to Index</Link>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
            Delete Post
            </button>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
            </div>
        );
    }

    onDeleteClick()
    {
        this.props.deletePost(this.props.post.id).then(() => {browserHistory.push('/')});
    }

    componentWillMount()
    {
        this.props.fetchPost(this.props.params.id);
    }
}

function mapStateToProps(state){
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);