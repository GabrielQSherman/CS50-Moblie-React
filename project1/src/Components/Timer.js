import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

const currentDate = new Date().toString().substring(0,24); 

export default class TimerContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            timerRunning: false,
            dateNow: currentDate,
            display: false,
            displayMsg: 'Show',
            timerTime: 0,
            workTime: 0,
            breakTime: 0,
        }
    }

    updateDate = () => {
        const date = new Date().toString();
        this.setState( () => ({
            dateNow: date.substring(0,24),
            timerTime: this.state.timerRunning  && this.state.timerTime > 0 ? this.state.timerTime-1 : this.state.timerTime
        }))
    }

    toggleDisplay = () => {
        this.setState( () => ({
            display: !this.state.display,
            displayMsg: this.state.displayMsg=='Show' ? 'Hide' : 'Show',

        }))
    }

    resetTimer = () => {
        this.setState( () => ({
            timerTime: 0,
            timerRunning: Boolean(false)
        }))
    }

    pauseTimer = () => {
        this.setState( () => ({
            timerTime: !this.state.timerRunning ? this.state.workTime : this.state.timerTime,
            timerRunning: !this.state.timerRunning,
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
                <Text style={{...styles.text, fontSize: 45, textAlign: "center"}}>
                    {this.state.dateNow}
                </Text>
                <Button 
                    onPress={()=>this.toggleDisplay()} 
                    title={this.state.displayMsg}
                />
                
                {this.state.display 
                ? (
                    <ScrollView 
                        contentContainerStyle={{...styles.timerContainer}}
                    >
                        <Text style={{...styles.timerText}}>{this.state.timerTime}</Text>
                        <Text style={{...styles.text, marginTop: 30}}>
                            Select Your Timing
                        </Text>

                        <TextInput 
                            style = {{...styles.textInput}}
                            placeholder="Enter Work Time"
                            numeric value   
                            keyboardType={'numeric'} 
                        />

                        <TextInput 
                            style = {{...styles.textInput}}
                            placeholder="Enter Break Time"
                            numeric value   
                            keyboardType={'numeric'} 
                        />

                        <View
                            style={{flexDirection: "row"}}
                        >
                            <Button 
                                onPress={()=>this.pauseTimer()} 
                                title={this.state.timerRunning ? "Pause" : "Start"}
                            />
                            <Button 
                                onPress={()=>this.resetTimer()} 
                                title="Reset Timer"
                            />
                        </View>

                    </ScrollView>
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

  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
  },

  text: {
    color: 'white',
    fontSize: 50,
    marginTop: 100
  },

  timerText: {
    color: 'white',
    fontSize: 100,
    marginTop: 10
  },

  textInput: {
    color: 'white',
    fontSize: 30,
    marginTop: 30
  },

});
