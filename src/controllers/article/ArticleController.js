import React from 'react';
import Controller from '../Controller';
import { ArticleView, BackView } from '../../views/article/ArticleView';

export default class ArticleController extends Controller {
  static navigationOptions = {
    header: {visible: false}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data
    };
  }

  fetchArticle() {
    this.post(this.urls.FETCHARTICLE, {id: 10}).then((e) => {
      this.setState({
        dataSource: this.ds.cloneWithRows(this.articles)
      });
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <ArticleView controller={this} onBack={() => this.props.navigation.goBack()} />
    );
  }
}