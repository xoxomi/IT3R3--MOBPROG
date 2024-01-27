import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const Buttons = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
        <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
            ]}
        >
            {text}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,

    },

    container_PRIMARY: {
        backgroundColor: '#D9D9D9',
    },
    

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    container_TERTIARY: {

    },

    text:{
        fontWeight: 'bold',
        color: 'black',
    },
    text_TERTIARY: {
        color: '#C7CCDF',
    },
    text_SECONDARY: {
        color: 'gray',
    }
});

export default Buttons;