import React from 'react';
import Controller from '../Controller';
import { ListView } from 'react-native';
import { ArticleListView, TabIconView } from '../../views/article/ArticleListView';
import { ShareStyles } from '../../views/ShareStyles.js';

export default class ArticleListController extends Controller {
  static navigationOptions = {
    title: '干货',
    header: {style: ShareStyles.stackNavigatorHeader, titleStyle: ShareStyles.stackNavigatorHeaderTitle},
    tabBar: {label: '干货', icon: TabIconView}
  }
  
  constructor(props) {
    super(props);
    this.page = 0;
    this.articles = this.cache.getCache('ARTICLELIST')||[];
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.articles),
      hasMore: true,
      isRefreshing: false
    };
    this.fetchArticles();
  }

  fetchArticles(reset) {
    if (reset) {
      this.page = 0;
      this.setState({isRefreshing: true});
    }
    this.post(this.urls.FETCHARTICLES, {rows: 10, page: this.page}).then((e) => {
      if (reset) this.setState({isRefreshing: false});
      if (this.page == 0) {
        this.articles = e.data;
        this.cache.setCache('ARTICLELIST', e.data);
      }
      else this.articles = this.articles.concat(e.data);
      this.page++;
      if (e.data.length < 10) {
        this.setState({hasMore: false});
      } else this.setState({hasMore: true});
      this.setState({
        dataSource: this.ds.cloneWithRows(this.articles)
      });
    }).catch((e) => {
      if (reset) this.setState({isRefreshing: false});
      console.log(e);
    });
  }

  onCommentPress(rowData) {
    console.log('我是Comment');
    console.log(rowData);
  }

  render() {
    return (
      <ArticleListView
        hasMore={this.state.hasMore}
        dataSource={this.state.dataSource}
        onNextPage={() => this.fetchArticles()}
        onEndReached={() => {if (this.state.hasMore) this.fetchArticles();}}
        onRefresh={() => this.fetchArticles(true)}
        isRefreshing={this.state.isRefreshing}
        onMainPress={(rowData) => this.props.navigation.navigate('Article', {data: rowData})}
        onCommentPress={this.onCommentPress}
      />
    );
  }
}