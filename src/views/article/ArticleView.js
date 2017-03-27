import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';

let { width, height } = Dimensions.get('window');

// 格式化日期
let formatDate = (stamp) => {
  let date = new Date(stamp * 1000);
  return date.getMonth() + 1 + '-' + date.getDate();
};
// 主界面
export const ArticleView = ({...props}) => {
  let { data } = props.controller.state;
  return (
    <View style={styles.main}>
      <ScrollView style={{}}>
        <Image style={{width: width, height: width * 0.6}} source={{uri: 'http://assets.renjk.com/health/' + data.cover}} />
        <Text style={{padding: 10, fontSize: 18, lineHeight: 24, textAlign: 'justify'}}>{data.title}</Text>
        <View style={{padding: 10, paddingTop: 10}}>
          <Image style={{width: 40, height: 40, borderRadius: 20}} source={{uri: 'http://assets.renjk.com/mem/' + data.author_avatar}} />
          <Text style={{position: 'absolute', top: 10, left: 60, color: '#555'}}>{data.author_name}</Text>
          <Text style={{position: 'absolute', bottom: 14, left: 60, color: '#999', fontSize: 12}}>{formatDate(data.created_at)}</Text>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} hitSlop={{top: 10, bottom: 10, left: 12, right: 32}} onPress={props.onBack}>
          <Image style={{width: 16, height: 16, tintColor: '#fff'}} source={require('../../assets/icon_back.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
};
// 样式
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffffff'},
  header: {width: width, height: 64, position: 'absolute', top: 0, left: 0},
  backBtn: {justifyContent: 'center', alignItems: 'center', width: 24, height: 24, backgroundColor: 'rgba(0, 0, 0, 0.4)', marginTop: 30, marginLeft: 12, borderRadius: 12},
  item: {backgroundColor: '#ffffff', marginBottom: 10},
  cover: {marginTop: 10, marginLeft: 10, width: width - 20, height: (width - 20) / 1.7},
  title: {padding: 10, fontSize: 16, lineHeight: 24, textAlign: 'justify', color: '#555555'},
  info: {marginLeft: 10, marginRight: 10, paddingTop: 16, paddingBottom: 16, borderTopWidth: 0.5, borderTopColor: '#efefef'},
  author: {fontSize: 12, color: '#999999'},
  praise: {position: 'absolute', right: 0, top: 16, flexDirection: 'row', paddingLeft: 16},
  praise_icon: {width: 14, height: 14},
  praise_text: {fontSize: 12, color: '#999999'},
  footer: {paddingTop: 16, paddingBottom: 26, textAlign: 'center', backgroundColor: '#efefef', color: '#999999'}
});