import React, { Component } from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import {
    // SafeAreaView,
    // StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
  } from 'react-native';
import actions from "../../redux/calculator/actions";


class CalculatorRedux extends Component {

    handleIncrement = () => {
        this.props.incrementCount()
    }

    handleDecrement = () => {
        this.props.decrementCount()
    }

    handleReset = () => {
        this.props.resetCount()
    }



    render(){
        const {count} = this.props.calculator;
        return (
            <>
                <ScrollView>
                    <View>  
                        <Text
                            style={{ 
                                fontSize:200,
                                textAlign:"center"
                            }}
                        > 
                            {count} 
                        </Text>
                    </View>
                    <View>
                        <Button
                            title="TAMBAHI"
                            onPress={this.handleIncrement} 
                            color="green"
                        />
                        <Button
                            title="KURANGI"
                            onPress={this.handleDecrement}
                        />
                        <Button
                            title="RESET"
                            onPress={this.handleReset}
                            color="red"
                        />
                    </View>
                </ScrollView>
            </>
        )
    }

}


const mapStateToProps = (state) => {
    return { 
      calculator: state.calculator,
     };
  };
  
export default compose(
connect(
    mapStateToProps,
    actions
)
)(CalculatorRedux);