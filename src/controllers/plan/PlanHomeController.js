import React from 'react';
import Controller from '../Controller';
import { PlanHomeView, TabIconView } from '../../views/plan/PlanHomeView';
import { ShareStyles } from '../../views/ShareStyles.js';

export default class PlanHomeController extends Controller {
  static navigationOptions = {
    title: '计划',
    header: {style: ShareStyles.stackNavigatorHeader, titleStyle: ShareStyles.stackNavigatorHeaderTitle},
    tabBar: {label: '计划', icon: TabIconView}
  }

  constructor(props) {
    super(props);
    console.log(require('../../assets/icon_back.png'));
  }

  onPress() {
    this.props.navigation.navigate('StackLogin');
  }

  render() {
    return (<PlanHomeView onPress={() => this.onPress()} />);
  }
}