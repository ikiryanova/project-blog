import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions'; 
import style from './style.css';

class MainPages extends Component {
  componentDidMount() {
    this.props.getInitPostsAction();
  }
  render() {
    const { posts } = this.props;
    return (
      <div className={style.postList}>
        {posts.map(function (postItem) {
          return (
            <div className={style.postWrapper} key={postItem.id}>
              <div className={style.postTitle}>
                <Link to={`/post/${postItem.id}`}>{postItem.title}</Link>
              </div>
              <div className={style.postContent}>{postItem.content}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.main.posts
  }
}

export default connect(mapStateToProps, Actions)(MainPages);