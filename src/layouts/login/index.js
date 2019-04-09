import React from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import styles from './index.less';

@connect()
export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  back = () => {
    this.props.history.push('/')
  
  }
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.title}>登录页</div>
          <Button  className={styles.button} onClick={this.back} type="primary">返回首页</Button>
      </div>
    )
  }
}