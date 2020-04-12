import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './style.css';
import Input from 'src/components/input';
import Textarea from 'src/components/textarea';
import Button from 'src/components/button';
import * as Actions from './actions';

class NewPost extends Component {
  // static propTypes = {
  //   dataForm: PropTypes.object.isRequired,
  //   changeFieldAction: PropTypes.func.isRequired,
  // };

  onSubmit = () => {
    this.props.createPostAction(this.props.data);
  }
  onChangeData = (data) => {
    const fieldId = data.fieldId;
    const value = data.value;
    this.props.changeDataAction(fieldId, value);
  };

  render() {
    const { data } = this.props;
    return(
      <div className={style.postFormWrapper}>
    
        <div className={style.postRow}>
          <div>Заголовок</div>
          <Input
            id="title"
            value={data.title}
            onChange={this.onChangeData}
          />
        </div>
        
        <div className={style.postRow}>
          <div>Содержание поста</div>
          <Textarea
            id="content"
            value={data.content}
            onChange={this.onChangeData}
          />
        </div>
        
        <Button id="submit" onClick={this.onSubmit}>Создать</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.newPost.data
  };
}


export default connect(mapStateToProps, Actions)(NewPost);