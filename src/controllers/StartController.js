import React from 'react';
import { View, Image, Text, Animated } from 'react-native';
import Controller from './Controller';
import { RootNavigator } from '../config/Routes';

export default class StartController extends Controller {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      complete: false
    };
    this.state.opacity.addListener((e) => {
      if (e.value === 1) {
        this.state.opacity.removeAllListeners();
        this.setState({complete: true});
      }
    });
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {toValue: 1, duration: 1000}).start();
  }

  render() {
    if (this.state.complete) {
      return (<RootNavigator />);
    } else {
      let width = this.screenWidth - 40;
      let height = width * 291 / 442;
      return (
        <Animated.View style={{flex: 1, padding: 20, justifyContent: 'center', opacity: this.state.opacity}}>
          <Image style={{width:width, height: height}} source={require('../assets/start_cover.jpg')} />
          <View style={{marginTop: 16}}>
            <Image style={{width: 48, height: 48}} source={require('../assets/start_logo.png')} />
            <Text style={{position: 'absolute', left: 64, fontSize: 20}}>KG运动</Text>
            <Text style={{position: 'absolute', left: 64, bottom: 0, color: '#999'}}>健康 • 是一群人的事</Text>
          </View>
        </Animated.View>
      );
    }
  }
}