import { createContext, useCallback, useState } from "react";
import React, { useEffect } from "react"
import axios from "axios"

export const BookContext = createContext();

export default function EventContextProvider({ children }) {
    const [bookList, setBookList] = useState([])
    const [selectedLevel, setSelectedLevel] = useState("All")


    const init = useCallback(async () => {
        try {
            const result = await axios({
                url: "https://api-dev.lelivrescolaire.fr/graphql",
                method: "post",
                data: {
                    query: `
        {
        viewer {
            books {
              hits {
                id
                displayTitle
                url
                subjects{name}
                levels{name}
                valid
              }
            }
          }
        }`,
                },
            })
            setBookList(result?.data?.data?.viewer?.books?.hits)
        } catch (e) {
            console.log("Error: ", e)
        } finally {
            console.log(bookList)
        }
    }, [bookList])

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        init()
    }, [])

    return (
        <BookContext.Provider value={{ bookList, setBookList, selectedLevel, setSelectedLevel }}>
            {children}
        </BookContext.Provider>
    )
}
