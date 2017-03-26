import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import StartController from './src/controllers/StartController';
import { RootNavigator } from './src/config/Routes';

AppRegistry.registerComponent('kg', () => StartController);
