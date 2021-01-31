import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Platform, TouchableNativeFeedback} from 'react-native';
import DefaultText from '../components/DefaultText';

const MealItem = props => {

    let TouchableCmp = TouchableNativeFeedback

    if(Platform.OS === 'ios') {
        TouchableCmp = TouchableOpacity
    };

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text style={styles.title} >{props.title}</Text>
                    </ImageBackground>
                    
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
            </TouchableCmp>
        </View>
    )
};

const styles = StyleSheet.create({
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
       height: '15%',
       paddingHorizontal: 10,
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    mealItem: {
        marginVertical: 20,
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    bgImage: {
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center'
    }
});

export default MealItem;