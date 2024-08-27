import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    const textElement = <Text>By there!</Text>
    const name = 'Donald';
    
    return (
        <View>
            <Text style={styles.textStyle1}>This is the components screen</Text>
            <Text>{greeting}</Text>
            {textElement}
            <Text style={styles.textStyle1}>Getting started with React Native</Text>
            <Text style={styles.textStyle2}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 20,
    },
    textStyle2: {
        fontSize: 45
    }
});

export default ComponentsScreen;