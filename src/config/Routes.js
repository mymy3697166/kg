import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import PlanHomeController from '../controllers/plan/PlanHomeController';
import ArticleListController from '../controllers/article/ArticleListController';
import ArticleController from '../controllers/article/ArticleController';
import LoginController from '../controllers/login/LoginController';
import CommunityHomeController from '../controllers/community/CommunityHomeController';

// 登录栈导航
const StackLoginNavigator = StackNavigator({
  Login: {screen: LoginController}
}, {
  headerMode: 'screen'
});
// 标签导航
const TabHomeNavigator = TabNavigator({
  PlanHome: {screen: PlanHomeController},
  ArticleList: {screen: ArticleListController},
  CommunityHome: {screen: CommunityHomeController}
}, {
  tabBarOptions: {
    inactiveTintColor: '#888',
    activeTintColor: '#23aeeb',
    style: {backgroundColor: '#fff'},
    indicatorStyle: {height: 0},
    labelStyle: {margin: 0, fontSize: 12, marginTop: 3},
    tabStyle: {paddingBottom: 0},
    showIcon: true
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false
});
// 主栈
const StackMainNavigator = StackNavigator({
  Home: {screen: TabHomeNavigator},
  Article: {screen: ArticleController}
}, {
  headerMode: 'screen'
});
// modal栈
export const RootNavigator = StackNavigator({
  StackMain: {screen: StackMainNavigator},
  StackLogin: {screen: StackLoginNavigator}
}, {
  headerMode: 'none',
  mode: 'modal'
});
