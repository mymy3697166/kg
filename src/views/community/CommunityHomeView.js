import React, { Component } from 'react';
import { View, Image } from 'react-native';

export const TabIconView = ({ focused, tintColor }) => {
  if (focused) return (<Image source={require('../../assets/tab_community_current.png')} />);
  else return (<Image source={require('../../assets/tab_community.png')} />);
}

export const CommunityHomeView = ({...props}) => (
  <View style={{flex: 1, backgroundColor: '#ff9966'}}></View>
)