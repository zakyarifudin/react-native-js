import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-ui-kitten';
import actions from '../../redux/auth/actions';
import getLang from '../../helper/language/MyLanguange';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 100,
    // marginVertical: 200,
    borderRadius: 100,
    height: 50,
  },
  text: {
    marginVertical: 50,
    marginHorizontal: 'auto',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

class SwitchTheme extends Component {
  handleSwitchTheme = selectedTheme => {
    const {switchTheme} = this.props;
    switchTheme(selectedTheme);
  };

  render() {
    const {selectedTheme} = this.props.auth;
    return (
      <>
        <ScrollView>
          <View>
            <Text category="h1" style={styles.text}>
              {getLang({id: selectedTheme})}
            </Text>
          </View>
          <View>
            <Button
              onPress={() => this.handleSwitchTheme('dark')}
              style={styles.button}>
              {getLang({id: 'Dark'})}
            </Button>
            <Button
              onPress={() => this.handleSwitchTheme('light')}
              style={styles.button}
              status="danger">
              {getLang({id: 'Light'})}
            </Button>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(connect(mapStateToProps, actions))(SwitchTheme);
