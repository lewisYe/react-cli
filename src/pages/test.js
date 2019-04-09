import React from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import { REQUEST_TEST } from '../reducers/test';

@connect(({ test }) => ({ test }))
export default class Test extends React.Component {
  constructor(props) {
    super(props)
  }
  onClick = () => {
    this.props.dispatch({
      type:REQUEST_TEST,
      payload:'go'
    })
    this.props.history.push('/login')
  }
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>登录页</Button>
      </div>
    )
  }
}