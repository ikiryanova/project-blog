import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import Textarea from 'src/components/textarea';
import * as Actions from './actions';

class PostPage extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
      };
    onClick = () => {
        this.props.push('/');
      }
    render() {
        return(
            <div>
                <div>
                    <div>
                        Заголовок
                    </div>
                    <div>
                        <Input
                            id="title"
                            value={this.props.dataForm.title}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        Содержание поста
                    </div>
                    <div>
                        <Textarea
                            id="content"
                            value={this.props.dataForm.content}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                </div>
                <button onClick={this.onClick}>Опубликовать</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        dataForm: state.post.dataForm
    };
}
export default connect(mapStateToProps, {
    push,
    ...Actions
  })(PostPage);