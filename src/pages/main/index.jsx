import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions'; 
import style from './style.css';

class MainPages extends Component {
  componentDidMount() {
    this.props.getInitPostsAction();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    const { posts, isLoadingPosts } = this.props;
    const postsLength = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    
    if(windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
      this.props.getScrollPostsAction(postsLength);
    }
  }

  onClickLike = (e) => {
    const { id } = e.target;
    this.props.icreaseLikeCountAction(id);
  }

  onClickDiskLike = (e) => {
    const { id } = e.target;
    this.props.icreaseDislikeCountAction(id);
  }
  
  render() {
    const { posts } = this.props;
    return (
      <div className={style.postList}>
        {posts.map((postItem) => {
          return (
            <div className={style.postWrapper} key={postItem.id}>
              <div className={style.postTitle}>
                <Link to={`/post/${postItem.id}`} className={style.linkTitle}>{postItem.title}</Link>
              </div>
              <div className={style.postContent}>{postItem.content}</div>
              <div className={style.footer}>
                <div className={style.leftCol}>
                  <div id={postItem.id} onClick={this.onClickLike}className={style.like}>Like {postItem.likesCount}</div>
                  <div id={postItem.id} onClick={this.onClickDiskLike}className={style.dislike}>Dislike {postItem.dislikesCount}</div>
                </div>
                
                <div className={style.viewWrapper}>
                  <div className={style.eye}></div>
                  <div>{postItem.viewsCount}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.main.posts,
    isLoadingPosts: state.main.isLoadingPosts
  }
}

export default connect(mapStateToProps, Actions)(MainPages);