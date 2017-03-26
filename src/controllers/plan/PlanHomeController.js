import React from 'react';
import Controller from '../Controller';
import { PlanHomeView, TabIconView } from '../../views/plan/PlanHomeView';

export default class PlanHomeController extends Controller {
  static navigationOptions = {
    title: '计划',
    tabBar: {
      label: '计划',
      icon: TabIconView
    }
  }

  constructor(props) {
    super(props);
  }

  onPress() {
    this.props.navigation.navigate('StackLogin');
  }

  render() {
    return (<PlanHomeView onPress={() => this.onPress()} />);
  }
}