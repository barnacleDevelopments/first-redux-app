import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { postsList } from '../postsList';


class Button extends React.Component {
    onClickFetchPosts = () => {
         this.props.onFetchPosts(postsList);      
    };      
    
    render() {         
        return(              
        <button onClick={this.onClickFetchPosts}>Get Posts</button>
        );      
    };
};

const mapDispatchToProps = dispatch => ({ 
    onFetchPosts: postsList => dispatch(fetchPosts(postsList))
});


export default connect(null, mapDispatchToProps)(Button);