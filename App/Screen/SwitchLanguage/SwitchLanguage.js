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

class SwitchLanguage extends Component {
  handleSwitchLanguage = selectedLanguage => {
    const {switchLanguage} = this.props;
    switchLanguage(selectedLanguage);
  };

  render() {
    const {selectedLanguage} = this.props.auth;
    return (
      <>
        <ScrollView>
          <View>
            <Text category="h1" style={styles.text}>
              {selectedLanguage}
            </Text>
          </View>
          <View>
            <Button
              onPress={() => this.handleSwitchLanguage('ID')}
              style={styles.button}>
              {getLang({id: 'Indonesia Language'})}
            </Button>
            <Button
              onPress={() => this.handleSwitchLanguage('EN')}
              style={styles.button}
              status="danger">
              {getLang({id: 'English Language'})}
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

export default compose(connect(mapStateToProps, actions))(SwitchLanguage);
