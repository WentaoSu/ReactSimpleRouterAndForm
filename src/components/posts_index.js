import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsIndex extends Component {
    render() {
        return (<div>
            <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                </Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
            {this.renderPosts()}
            </ul>
        </div>
        );
    }

    renderPosts(){
        return this.props.posts.map((post) =>{
            return (
                <li className = "list-group-item" key ={post.id}>
                <Link to={"posts/"+ post.id}>
                <span className="pull-xs-right">{post.categories}</span>
                <strong>{post.title}</strong>
                </Link>
                </li>
            );
        });
    }
    componentWillMount() {
        //good time to call action creator to fetch posts.
        this.props.fetchPosts();
    }
};

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

//the second argument of connect can take an object like {propName: actionCreatorName}
//to replace the below function, if the propName and actionCreatorName are identical
//it can be even shorten to: {propName}. After using the object notation, the import
//for bindActionCreators is no longer needed.

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts}, dispatch);
// }


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);