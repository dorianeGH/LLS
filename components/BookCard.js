import React from "react";
import { Card} from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from "react-native";

const BookCard = ({ id, displayTitle, url, valid}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <Card key={id} style={styles.card}>
            <Card.Title>{displayTitle}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{url}} onPress={() => valid && navigation.navigate('BookDetails', {id})}></Card.Image>
        </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        margin: 5,
        width: '100%',


    }
});

export default BookCard;
