import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home/Home';
import Calculator from '../Screen/CalculatorRedux/Calculator';
import getLang from '../helper/language/MyLanguange';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

const Navigation = createAppContainer(AppNavigator);

export default Navigation;
