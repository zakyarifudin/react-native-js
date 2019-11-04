import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
  } from 'react-native';

class Calculator extends Component {
    state = {
        count : 0
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    handleReset = () => {
        this.setState({
            count : 0
        })
    }



    render(){
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
                            {this.state.count} 
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


export default Calculator;