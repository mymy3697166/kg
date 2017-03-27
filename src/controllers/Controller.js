import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import db from '../config/Db';
import { URLs } from '../config/Constants';
import DataCache from '../models/DataCache';

export default class Controller extends Component {
  constructor(props) {
    super(props);
    
    let {height, width} = Dimensions.get('window');
    this.screenWidth = width;
    this.screenHeight = height;
    this.db = db;
    this.urls = URLs;
    this.cache = DataCache;
  }

  osIsOS

  post(url, forms) {
    let token = 'BBA8A2567B5095FEF4E316F532903571';
    return fetch(url, {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'mtoken': token},
      body: JSON.stringify(forms||{})
    }).then((response) => response.json());
  }
}