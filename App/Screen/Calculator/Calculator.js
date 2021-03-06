import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-ui-kitten';
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

class Calculator extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <ScrollView>
          <View>
            <Text category="h1" style={styles.text}>
              {this.state.count}
            </Text>
          </View>
          <View>
            <Button onPress={this.handleIncrement} style={styles.button}>
              {getLang({id: 'Increment'})} (+)
            </Button>
            <Button
              onPress={this.handleDecrement}
              style={styles.button}
              status="warning">
              {getLang({id: 'Decrement'})} (-)
            </Button>
            <Button
              onPress={this.handleReset}
              style={styles.button}
              status="danger">
              {getLang({id: 'Reset'})} (0)
            </Button>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Calculator;
