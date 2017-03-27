import React from 'react';
import { StyleSheet, View, Image, ListView, Text, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';

let { width, height } = Dimensions.get('window');
// tabBar图标
export const TabIconView = ({ focused, tintColor }) => {
  if (focused) return (<Image source={require('../../assets/tab_article_current.png')} />);
  else return (<Image source={require('../../assets/tab_article.png')} />);
};
// 格式化日期
let formatDate = (stamp) => {
  let date = new Date(stamp * 1000);
  return date.getMonth() + 1 + '-' + date.getDate();
};
// 干货列表项样式
let ArticleListItemView = ({...props}) => (
  <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => props.onMainPress(props.rowData)}>
    <Image style={styles.cover} source={{uri: 'http://assets.renjk.com/health/' + props.rowData.cover}} />
    <Text style={styles.title}>{props.rowData.title}</Text>
    <View style={styles.info}>
      <Text style={styles.author}>{props.rowData.author_name + ' ' + formatDate(props.rowData.created_at)}</Text>
      <TouchableOpacity style={styles.praise} hitSlop={{top: 16, bottom: 16, left: 16, right: 10}} onPress={() => props.onCommentPress(props.rowData)}>
        <Image style={styles.praise_icon} source={require('../../assets/icon_comment.png')} />
        <Text style={[styles.praise_text, {marginLeft: props.rowData.comment_count == 0 ? 0 : 10}]}>
          {props.rowData.comment_count == 0 ? '' : props.rowData.comment_count}
        </Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);
// 主界面
export const ArticleListView = ({...props}) => (
  <ListView
    style={styles.listViewBg}
    dataSource={props.dataSource}
    renderRow={(rowData) => (<ArticleListItemView rowData={rowData} onMainPress={props.onMainPress} onCommentPress={props.onCommentPress} />)}
    renderFooter={() => <Text style={styles.footer}>{props.hasMore ? '正在加载...' : '没有更多了'}</Text>}
    onEndReached={() => props.onEndReached()}
    onEndReachedThreshold={0}
    enableEmptySections={true}
    refreshControl={
      <RefreshControl
        refreshing={props.isRefreshing}
        onRefresh={() => props.onRefresh()}
        tintColor={"#999"}
        colors={['#999']}
      />
    }
  />
);
// 样式
const styles = StyleSheet.create({
  listViewBg: {backgroundColor: '#efefef'},
  item: {backgroundColor: '#ffffff', marginBottom: 10},
  cover: {marginTop: 10, marginLeft: 10, width: width - 20, height: (width - 20) / 1.7},
  title: {padding: 10, fontSize: 16, lineHeight: 24, textAlign: 'justify', color: '#555555'},
  info: {marginLeft: 10, marginRight: 10, paddingTop: 16, paddingBottom: 16, borderTopWidth: 0.5, borderTopColor: '#efefef'},
  author: {fontSize: 12, color: '#999999'},
  praise: {position: 'absolute', right: 0, top: 16, flexDirection: 'row'},
  praise_icon: {width: 14, height: 14},
  praise_text: {fontSize: 12, color: '#999999'},
  footer: {paddingTop: 16, paddingBottom: 26, textAlign: 'center', backgroundColor: '#efefef', color: '#999999'}
});