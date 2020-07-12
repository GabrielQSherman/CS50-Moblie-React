import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const currentDate = new Date().toString().substring(0,24); 

export default class TimerContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            timerRunning: false,
            dateNow: currentDate,
            display: false,
            displayMsg: 'Show'
        }
    }

    updateDate = () => {
        const date = new Date().toString();
        this.setState( () => ({
            dateNow: date.substring(0,24)
        }))
    }

    toggleDisplay = () => {
        this.setState( () => ({
            display: !this.state.display,
            displayMsg: this.state.displayMsg=='Show' ? 'Hide' : 'Show',

        }))
    }

    componentDidMount() {
        this.dateClock = setInterval(this.updateDate, 1000)
    }

    componentWillUnmount(){
        clearInterval( this.dateClock );
    }

    render() {
        return (
            <View style={{...styles.container}}>
                <Text style={{...styles.text}}>
                    {this.state.dateNow}
                </Text>
                <Button 
                    style={{...styles.button}}
                    onPress={()=>this.toggleDisplay()} 
                    title={this.state.displayMsg}
                />
                
                {this.state.display 
                ? (
                    <Text style={{...styles.text}}>
                        Select Your Timing
                    </Text>
                    
                )
                : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10
  },

  text: {
    color: 'white',
    fontSize: 50,
    marginTop: 100
  },

  button: {
      backgroundColor: 'white',
      borderColor: 'white',
      color: 'pink'
  }
});
