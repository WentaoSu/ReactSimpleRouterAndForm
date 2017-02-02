import React, {Component} from 'react';
import PostsForm from './posts_new_form';
import {createPost} from '../actions/index';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class PostsNewPage extends Component{
    handleSubmita = (values) => {
    // Do something with the form values
    console.log(values);
    this.props.createPost(values).then(() => {browserHistory.push('/')});
  }

  render()
  {
      return (
          <div>
            <PostsForm onSubmit={this.handleSubmita}/>
          </div>
          );
  }
}

export default connect(null, {createPost})(PostsNewPage);

