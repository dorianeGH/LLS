import React from "react";
import { Card} from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import {StyleSheet} from "react-native";

const BookCard = ({ id, displayTitle, url, valid}) => {
    const navigation = useNavigation();

    return (
        <Card key={id} containerStyle={!valid ? {backgroundColor:'darkgrey'} : null }>
            <Card.Title>{displayTitle}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{url}} onPress={() => valid && navigation.navigate('BookDetails', {id})}></Card.Image>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'skyblue',
    }
});

export default BookCard;
