import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home/Home';
import Calculator from '../Screen/CalculatorRedux/Calculator';
import getLang from '../helper/language/MyLanguange';

class Navigation extends Component {
  render() {
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
            headerTitle: getLang({id: 'Redux Calculator'}),
            headerStyle: {
              backgroundColor: '#3366FF',
            },
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
