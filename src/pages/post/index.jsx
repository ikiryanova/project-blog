import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css'
import * as Actions from './actions';

class PostPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }

  render() {
    const { data } = this.props;
    return(
      <div>
        {data 
         ? <div className={style.postWrapper}>
           <div className={style.postTitle}>{data.title}</div>
           <div className={style.postContent}>{data.content}</div>
         </div>
         : <div>loading...</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
      data: state.post.data
    };
}
export default connect(mapStateToProps, Actions)(PostPage);