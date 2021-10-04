import React from "react";
import { BookContext } from "../contexts/bookContext";
import { useEffect, useContext, useState } from "react";
import { Button } from 'react-native-elements';
import {View, Text, FlatList, Image, StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";
import axios from "axios";


const BookDetails = ({ navigation }) => {
    const { bookList } = useContext(BookContext);
    const route = useRoute();
    const bookId = route.params.id

    const [chapterList, setChapterList] = useState([]);



    useEffect(() => {
        axios({
            url: "https://api-dev.lelivrescolaire.fr/graphql",
            method: "post",
            data: {
                query: `query($bookId:Int){
          viewer {
            chapters(bookIds:[$bookId]) {
                  hits {
                  id
                  title
                  url
                  valid
                }
              }
            }
          }`,
                variables: {
                    bookId,
                },
            },
        }).then((result) => {
            setChapterList(result?.data?.data?.viewer?.chapters?.hits);
        });
    }, []);





    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {bookList
                    .filter(({ id }) => id === bookId)
                    .map((id) => id.displayTitle)}
            </Text>

            <View style={styles.container}>
                <Text style={styles.title}>Chapters</Text>
    {/*            {chapterList.map(({ id, title, url, valid }) => (
                    <FlatList
                        data={chapterList}
                        renderItem={({renderItem}) => (
                            <Image style={styles.image} source={{url}}/>
                        )}
                            />
                ))}*/}


                   {/* <FlatList
                        data={chapterList}
                        renderItem={({chapter}) => (
                            <Text style={styles.item}>

                            <Image style={styles.image} source={{url}}/>
                        )}
                    />
                ))}*/}

               {/* {chapterList.map(({ id, title, url, valid }) => (
                    <BookCard key={id} displayTitle={title} {...{ url, id, valid }} />
                ))}*/}
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 20,
    },
    image: {
        width: 150,
        height : 250,
        resizeMode : 'cover',
        borderRadius : 5,
        margin : 5,
    },

});

export default BookDetails;