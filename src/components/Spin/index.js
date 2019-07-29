import React from 'react'
import Styles from './index.less'
import { Spin } from 'antd';

export default class Loading extends React.Component {
  render() {
    return (
      <div className={Styles.loadingWarp}>
        <Spin size="large"/>
      </div>
    )
  }
}