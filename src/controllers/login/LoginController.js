import React from 'react';
import Controller from '../Controller';
import { LoginView } from '../../views/login/LoginView';

export default class LoginController extends Controller {
  static navigationOptions = {
    title: '登录'
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return (<LoginView />);
  }
}