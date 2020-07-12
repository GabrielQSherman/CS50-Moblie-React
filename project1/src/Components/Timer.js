import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const currentDate = new Date().toString().substring(0,24); 

export default class Timer extends React.Component {

    constructor() {
        super()
        this.state = {
            timerRunning: false,
            dateNow: currentDate
        }
    }

    updateDate = () => {
        
        const date = new Date().toString();

        this.setState( () => ({
            dateNow: date.substring(0,24)
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
                <Button title='Press'/>
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
    margin: 100
  },

  text: {
    color: 'white',
    fontSize: 50
  }
});
