import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import actions from '../../redux/post/actions';
import {Layout, Text} from 'react-native-ui-kitten';
import getLang from '../../helper/language/MyLanguange';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  button: {
    marginHorizontal: 100,
    borderRadius: 100,
    height: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    marginHorizontal: 5,
  },
  card: {
    marginVertical: 4,
  },
  item: {
    backgroundColor: '#09CBF7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
});

class PostList extends Component {
  componentDidMount = () => {
    this.handleOnRefresh();
  };

  componentDidUpdate = () => {
    const {clearError, post} = this.props;
    const {error} = post;
    if (error) {
      ToastAndroid.show(getLang({id: error}), 25);
      clearError();
    }
  };

  handleOnRefresh = () => {
    const {getPosts, post} = this.props;
    const {limit} = post;
    getPosts(0, limit);
  };

  handleLoadMore = () => {
    const {getPosts, post} = this.props;
    const {start, limit} = post;
    getPosts(start + limit, limit);
  };

  render() {
    const {posts, loading, start} = this.props.post;
    const {navigate} = this.props.navigation;
    //console.log(start, posts);

    const renderItem = item => (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigate('PostDetail', {id: item.id})}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.id}</Text>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <>
        <Layout style={styles.layout}>
          <FlatList
            onRefresh={this.handleOnRefresh}
            renderItem={({item}) => renderItem(item)}
            data={posts}
            refreshing={loading}
            keyExtractor={item => item.id.toString()}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.5}
            //initialNumToRender={limit}
          />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    post: state.post,
  };
};

export default compose(connect(mapStateToProps, actions))(PostList);
