import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import Loading from 'src/components/loading';
import * as Actions from './actions';

class PostPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }

  render() {
    const { data, isLoading } = this.props;
    console.log("isLoading", isLoading);
    return(
      <div>
        {!isLoading 
         ?  <div className={style.postWrapper}>
              <div className={style.postTitle}>{data.title}</div>
              <div className={style.postContent}>{data.content}</div>
            </div>
         : <Loading />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
      data: state.post.data,
      isLoading: state.post.isLoading
    };
}
export default connect(mapStateToProps, Actions)(PostPage);