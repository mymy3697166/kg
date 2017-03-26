import React from 'react';
import { View, Image, Text } from 'react-native';

export const TabIconView = ({ focused, tintColor }) => {
  if (focused) return (<Image source={require('../../assets/tab_plan_current.png')} />);
  else return (<Image source={require('../../assets/tab_plan.png')} />);
}

export const PlanHomeView = ({...props}) => (
  <View style={{flex: 1}}>
    <Text style={{padding: 16, backgroundColor: '#ff9933', color: '#fff'}} onPress={() => props.onPress()}>点我</Text>
  </View>
)