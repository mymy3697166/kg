import React from 'react';
import { View, Image, Text, requireNativeComponent } from 'react-native';
const resolveAssetSource = require('resolveAssetSource');

export const TabIconView = ({ focused, tintColor }) => {
  if (focused) return (<Image source={require('../../assets/tab_plan_current.png')} />);
  else return (<Image source={require('../../assets/tab_plan.png')} />);
}

let Player = requireNativeComponent('RCTMediaPlayer', null);

export const PlanHomeView = ({...props}) => (
  <View style={{flex: 1}}>
    <Text style={{padding: 16, backgroundColor: '#ff9933', color: '#fff'}} onPress={() => props.onPress()}>点我</Text>
    <Player style={{width: 300, height: 200}} source={resolveAssetSource(require('../../assets/test.mp4')).uri} />
  </View>
);