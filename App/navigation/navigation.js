import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home/Home';
import Calculator from '../Screen/CalculatorRedux/Calculator';
import PostList from '../Screen/Post/PostList';
import getLang from '../helper/language/MyLanguange';
import PostDetail from '../Screen/Post/PostDetail';

class Navigation extends Component {
  render() {
    const headerStyle = {
      headerStyle: {
        backgroundColor: '#3366FF',
      },
      headerTitleStyle: {
        color: '#FFFFFF',
      },
      headerTintColor: '#FFFFFF',
    };
    //List Route/Navigation
    const AppNavigator = createStackNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            headerShown: false,
          },
        },
        Calculator: {
          screen: Calculator,
          navigationOptions: {
            ...headerStyle,
            headerTitle: getLang({id: 'Redux Calculator'}),
          },
        },
        PostList: {
          screen: PostList,
          navigationOptions: {
            ...headerStyle,
            headerTitle: getLang({id: 'Post'}),
          },
        },
        PostDetail: {
          screen: PostDetail,
          navigationOptions: {
            ...headerStyle,
            headerTitle: getLang({id: 'Post Detail'}),
          },
        },
      },
      {
        initialRouteName: 'Home',
      },
    );

    const AppNavigation = createAppContainer(AppNavigator);

    return <AppNavigation />;
  }
}

//export default Navigation;
const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(connect(mapStateToProps))(Navigation);
