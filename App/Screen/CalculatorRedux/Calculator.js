import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {StyleSheet, View} from 'react-native';
import actions from '../../redux/calculator/actions';
import {Button, Layout, Text} from 'react-native-ui-kitten';
import getLang from '../../helper/language/MyLanguange';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
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

class CalculatorRedux extends Component {
  handleIncrement = () => {
    this.props.incrementCount();
  };

  handleDecrement = () => {
    this.props.decrementCount();
  };

  handleReset = () => {
    this.props.resetCount();
  };

  render() {
    const {count} = this.props.calculator;
    return (
      <>
        <Layout style={styles.layout}>
          <View>
            <Text category="h1" style={styles.text}>
              {count}
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
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    calculator: state.calculator,
  };
};

export default compose(connect(mapStateToProps, actions))(CalculatorRedux);
