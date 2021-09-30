import React from "react";
import { BookContext } from "../contexts/bookContext";
import { useEffect, useContext, useState } from "react";
import { Button } from 'react-native-elements';
import { View, Text } from "react-native";
import {useRoute} from "@react-navigation/native";
import axios from "axios";
import BookCard from "../components/BookCard";

export default function BookDetails({ navigation }) {
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
            <Text>Chapters</Text>
            <View>
                {chapterList.map(({ id, title, url, valid }) => (
                    valid ?
                    <BookCard key={id} displayTitle={title} {...{ url, id, valid }} /> : null
                ))}
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}
