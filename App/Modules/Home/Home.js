import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Text,
  Layout,
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';
import Calculator from '../Calculator/Calculator';

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
            <Text style={styles.text}> Rumahku </Text>
            <Button style={styles.buttonCalcu}>Calculator Redux</Button>
          </>
        ) : (
          <>
            <Text style={styles.text}> Calculator Biasa </Text>
            <Calculator />
          </>
        )}
        <BottomNavigation
          style={styles.bottomNavigation}
          selectedIndex={tabIndex}
          onSelect={this.onTabSelect}>
          <BottomNavigationTab title="HOME" />
          <BottomNavigationTab title="YEY" />
        </BottomNavigation>
      </Layout>
    );
  }
}

export default Home;
