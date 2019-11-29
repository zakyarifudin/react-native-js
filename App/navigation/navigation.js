import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home/Home';
import Calculator from '../Screen/CalculatorRedux/Calculator';
import Post from '../Screen/Post/Post';
import getLang from '../helper/language/MyLanguange';
import {HeaderBackButton} from 'react-navigation-stack';

class Navigation extends Component {
  render() {
    console.log(this.props.navigation);

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
        Post: {
          screen: Post,
          navigationOptions: {
            ...headerStyle,
            headerTitle: getLang({id: 'Post'}),
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
