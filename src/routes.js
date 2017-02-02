import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNewPage from './components/posts_new_page';
import PostsShow from './components/posts_show';

export default(
    <Route path="/" component={App}>
        <IndexRoute component = {PostsIndex} />
        <Route path="posts/new" component={PostsNewPage} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
    //this.props.params.id
);

