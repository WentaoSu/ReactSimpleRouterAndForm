
import {FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST} from '../actions/index';


//all holds all the blog posts of title and desc, post contains current active/selected full blog, which contains content.
const INITIAL_STATE = { all: [], post: null};

//   ...notation:
//   var oldObj = { foo: 'hello', bar: 'world' };
//   var newObj = { ...oldObj, foo: 'hi' };
//   console.log(newObj.foo); // 'hi';
//   console.log(newObj.bar); // 'world';

export default function(state = INITIAL_STATE, action){
    console.log('inside reducer - action.type-'+ action.type);
    // if(action.payload != undefined)
    // {
    //     console.log('1');
    //     console.log('inside reducer - action.type-'+ action.type +' data:'+ action.payload.data);
    // }
    switch(action.type){
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        case CREATE_POST:
            {
                console.log('inside reducer - case: Creat_Post', action.payload.data);
                return {...state, post:action.payload.data};
            }
        case FETCH_POST:
            return {...state, post:action.payload.data};
        case DELETE_POST:
            return {...state, post:null};
        default:
            return state;
    }
}