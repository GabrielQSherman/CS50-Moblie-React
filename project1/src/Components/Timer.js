import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const currentDate = new Date().toString().substring(0,24); 

export default class Timer extends React.Component {

    constructor() {
        super()
        this.state = {
            timerRunning: false,
            dateNow: currentDate,
            display: false
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
            display: !this.state.display
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
                <Text style={{...styles.text}}>{this.state.dateNow}</Text>
                <Button onPress={()=>this.toggleDisplay()} title='Press'/>
                
                {this.state.display 
                ? <Text style={{...styles.text}}> Hi </Text>
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
  }
});
