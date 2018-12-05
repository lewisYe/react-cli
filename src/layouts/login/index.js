import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import './index.scss';

const FormItem = Form.Item;
@connect()
@Form.create()
export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.userName == "admin" && values.password == "123456"){
          this.props.history.push('/')
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="root">
        <div className="login-container">
          <div className="login-title">用户登录</div>
          <Form>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" style={{ width: '100%' }} onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}