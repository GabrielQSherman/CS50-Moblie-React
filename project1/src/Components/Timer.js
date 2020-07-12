import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const currentDate = new Date().toString(); 

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
            dateNow: date.substring(0,date.length-15)
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
                <Text>{this.state.dateNow}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
