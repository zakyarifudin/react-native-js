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
  },
  buttonCalcu: {
    marginHorizontal: 100,
    marginVertical: 200,
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

    return (
      <Layout style={styles.container}>
        {tabIndex === 0 ? (
          <>
            <Text style={styles.text}> {getLang({id: 'Home'})} </Text>
            <Button style={styles.buttonCalcu}>
              {getLang({id: 'Redux Calculator'})}
            </Button>
          </>
        ) : tabIndex === 1 ? (
          <>
            <Text style={styles.text}>{getLang({id: 'Basic Calculator'})}</Text>
            <Calculator />
          </>
        ) : (
          <>
            <Text style={styles.text}>{getLang({id: 'Language'})}</Text>
            <SwitchLanguage />
          </>
        )}
        <BottomNavigation
          style={styles.bottomNavigation}
          selectedIndex={tabIndex}
          onSelect={this.onTabSelect}>
          <BottomNavigationTab title={getLang({id: 'Home'})} />
          <BottomNavigationTab title={getLang({id: 'Basic Calculator'})} />
          <BottomNavigationTab title={getLang({id: 'Language'})} />
        </BottomNavigation>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(connect(mapStateToProps))(Home);
