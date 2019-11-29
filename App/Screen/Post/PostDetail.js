import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import actions from '../../redux/post/actions';
import {Layout, Text} from 'react-native-ui-kitten';
import getLang from '../../helper/language/MyLanguange';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
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
  body: {
    marginHorizontal: 5,
  },
  card: {
    marginVertical: 4,
  },
  itemTitle: {
    backgroundColor: '#09CBF7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
    marginTop: 30,
  },
  itemBody: {
    backgroundColor: '#09CBF7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
});

class PostDetail extends Component {
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
    const {getPost} = this.props;
    const {params} = this.props.navigation.state;
    getPost(params.id);
  };

  render() {
    const {post, loading} = this.props.post;

    return (
      <>
        <Layout style={styles.layout}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={this.handleOnRefresh}
              />
            }>
            <View style={styles.itemTitle}>
              <Text style={styles.title}>{post.title}</Text>
            </View>
            <View style={styles.itemBody}>
              <Text style={styles.body}>{post.body}</Text>
            </View>
          </ScrollView>
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

export default compose(connect(mapStateToProps, actions))(PostDetail);
