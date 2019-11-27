import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-ui-kitten';
import actions from '../../redux/auth/actions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import getLang from '../../helper/language/MyLanguange';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 100,
    // marginVertical: 200,
    borderRadius: 100,
    height: 50,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 200,
    textAlign: 'center',
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
            <Text
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: Colors.white,
              }}>
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
