import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { REQUEST_TEMPLATE } from '~reducers/template';
import promiseBindDispatch from '~utils/promiseBindDispatch';
import IconSvg from '~components/IconSvg';
// import Styles from './index.less';
import Logo from '~images/logo.png';
import locale from '~utils/locale';

@connect(({ template }) => ({ template }))
export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.Dispatch = promiseBindDispatch(props.dispatch);
  }

  onClick = () => {
    this.Dispatch({
      type: REQUEST_TEMPLATE,
      payload: 'go',
    }).then(() => {
      const { history } = this.props
      history.push('/login');
    }).catch((err) => {
      const { history } = this.props
      history.push('/login');
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>{locale.name}</Button>
        <Button onClick={this.onClick}>登录页</Button>
        <div>
          <IconSvg type='airport' fill='#000000' />
        </div>
        <img src={Logo} alt='' />
      </div>
    )
  }
}
