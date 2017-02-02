import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {

renderField ({ input, label, type, meta: { touched, error, warning } })
{
    return (<div>
    <label>{label}</label>
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && ((error && <span className="label label-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>);
}

    render() {
        const { handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h3>Create a new post</h3>

                <Field name="title" type="text" component={this.renderField} label="Title" />
                <Field name="categories" type="number" component={this.renderField} label="Categories"/>
                <Field name="content" type="text" component={this.renderField} label="Content" />

                <button type="submit" disabled={this.props.submitting} className="btn btn-primary">Submit</button>
                <Link to="/" className = "btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//validate stops the form from submitting.
function validate(values){
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } 
  return errors
};

//warning doesn't stops the form from submitting.
function warn (values){
    const warnings = {}
  if (!values.categories) {
    warnings.categories = 'Text is too short...'
  }
  return warnings
}

//the connect function in React-Redux library has two args: 1. mapStateToProps, 2. mapDispatchToProps
//reduxForm has three args: 1. form config, 2. mapStateToProps, 3. mapDispatchToProps

PostsNew = reduxForm({
    form: 'uniqueFormName-PostsNew',
    validate,
    warn   
})(PostsNew);


PostsNew = connect(null, {createPost})(PostsNew);

export default PostsNew;

//redux-form is able to track the content of the form in the application state:
//so the state looks like:
// state: {
//     form:{ //this is the key we declared in the combineReducers
//         uniqueFormName-PostsNew: {
//             title: 'aaa',
//             categories: 'bbb',
//             content: 'ccc'
//         }
//     }
// }