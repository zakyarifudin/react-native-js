import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {StyleSheet} from 'react-native';
import {
  Button,
  Text,
  Layout,
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';
import Calculator from '../Calculator/Calculator';
import getLang from '../../helper/language/MyLanguange';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  bottomNavigation: {
    marginTop: 'auto',
  },
  text: {
    marginTop: 20,
    marginHorizontal: 'auto',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonCalculator: {
    marginTop: 100,
    marginHorizontal: 100,
    //marginVertical: 200,
    borderRadius: 100,
    height: 70,
  },
  buttonPost: {
    marginTop: 10,
    marginHorizontal: 100,
    //marginVertical: 200,
    borderRadius: 100,
    height: 70,
  },
});

class Home extends Component {
  state = {
    tabIndex: 0,
  };

  onTabSelect = tabIndex => {
    this.setState({tabIndex});
  };

  render() {
    const {tabIndex} = this.state;
    const {navigate} = this.props.navigation;

    return (
      <Layout style={styles.container}>
        {tabIndex === 0 ? (
          <>
            <Text category="h2" style={styles.text}>
              {' '}
              {getLang({id: 'Home'})}{' '}
            </Text>
            <Button
              style={styles.buttonCalculator}
              onPress={() => navigate('Calculator')}>
              {getLang({id: 'Redux Calculator'})}
            </Button>
            <Button style={styles.buttonPost} onPress={() => navigate('Post')}>
              {getLang({id: 'Post'})}
            </Button>
          </>
        ) : tabIndex === 1 ? (
          <>
            <Text category="h2" style={styles.text}>
              {getLang({id: 'Basic Calculator'})}
            </Text>
            <Calculator />
          </>
        ) : tabIndex === 2 ? (
          <>
            <Text category="h2" style={styles.text}>
              {getLang({id: 'Language'})}
            </Text>
            <SwitchLanguage />
          </>
        ) : (
          <>
            <Text category="h2" style={styles.text}>
              {getLang({id: 'Theme'})}
            </Text>
            <SwitchTheme />
          </>
        )}
        <BottomNavigation
          style={styles.bottomNavigation}
          selectedIndex={tabIndex}
          onSelect={this.onTabSelect}>
          <BottomNavigationTab title={getLang({id: 'Home'})} />
          <BottomNavigationTab title={getLang({id: 'Basic Calculator'})} />
          <BottomNavigationTab title={getLang({id: 'Language'})} />
          <BottomNavigationTab title={getLang({id: 'Theme'})} />
        </BottomNavigation>
      </Layout>
    );
  }
}

//export default Home;

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(connect(mapStateToProps))(Home);
