import React from 'react';
import Controller from '../Controller';
import { CommunityHomeView, TabIconView } from '../../views/community/CommunityHomeView';

export default class CommunityHomeController extends Controller {
  static navigationOptions = {
    title: '社区',
    tabBar: {
      label: '社区',
      icon: TabIconView
    }
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return (<CommunityHomeView />);
  }
}