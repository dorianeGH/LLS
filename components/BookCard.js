import React from "react";
import { Card} from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from "react-native";

const BookCard = ({ id, subjects, displayTitle, url, valid}) => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
        <Card key={id} style={styles.card}>
            <Card.Title>{displayTitle ? displayTitle : 'Unknown Title'}</Card.Title>
            <Text style={styles.subtitle}>{subjects?.length > 1 ? subjects.map((subject)=>subject.name + ' - ' ): subjects.map((subject)=>subject.name)}</Text>
            <Card.Image source={{url}} onPress={() => valid && navigation.navigate('BookDetails', {id})}/>
        </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        margin: 5,
        width: '100%',
    },
    subtitle:{
        color: 'pink',
        backgroundColor : 'black'
    }
});

export default BookCard;
