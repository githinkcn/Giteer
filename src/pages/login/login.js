import Taro, { Component } from '@tarojs/taro'
import { View ,Image} from '@tarojs/components';
import { AtInput } from 'taro-ui'
import { connect } from '@tarojs/redux';

import './login.scss';

@connect(({ login }) => ({
  ...login,
}))
export default class Login extends Component {

  config = {
    navigationBarTitleText: '登录'
  };

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillMount() {
    console.log('3');
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleUsernameChange (value) {
    this.setState({
      username: value
    })
  }

  handlePasswordChange (value) {
    this.setState({
      password: value
    })
  }

  getUserInfo () {
    const { username, password } = this.state
    if (username.length === 0) {
      Taro.showToast({
        title: '请输入邮箱',
        icon: 'none'
      })
    } else if (password.length === 0) {
      Taro.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    }
    this.props.dispatch({
      type: 'login/login',
      payload: {
        username: username,
        password: password,
      },
    });
  }

  render() {
    return (
      <View className='content'>
        <View className='logo_bg'>
          <View className='logo_bg'>
            <Image mode='aspectFit'
                   className='logo'
                   src={require('../../asset/images/octocat.png')}/>
          </View>
        </View>

        {/*content*/}
        <View className='login_content'>
          <View className='input_view'>
            <AtInput
              className='input_bar'
              name='username'
              title='邮箱:'
              type='text'
              placeholder='请输入邮箱'
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
            <AtInput
              className='input_bar'
              name='password'
              title='密码:'
              type='password'
              placeholder='请输入密码'
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)} />
          </View>
          <View className='login_button'
                onClick={this.getUserInfo.bind(this)}>
            Login
          </View>
        </View>
      </View>
    )
  }
}