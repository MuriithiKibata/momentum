import useFetch from "@/Hooks/useFetch"
import { Platform } from "react-native";
import { GET_FETCH_OPTIONS } from "@/option";
import { getToken } from "@/lib/getToken";
import React, { useEffect, useState } from 'react'

import { Todo } from "@/types";
function useTodos() {
    const [token, setToken] = useState()
    const API_URL =
      Platform.OS === "android"
        ? "http://10.0.2.2:3000/todos"
        : "http://localhost:3000/todos"; 


    useEffect(() => {
      const fetchToken = async () => {
        const token = await getToken();
        setToken(token);
      };
      fetchToken();
    }, []);



    const { data, loading, fetchData } = useFetch({
        url: API_URL,
        options: {
        ...GET_FETCH_OPTIONS,
        headers: {
        Authorization: `Bearer ${token}`,
        }
        },
        manual: false
    });

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData()

            if (data !== null) {
                return data
            } else return []
        } 
        getData()
     }, [])

     return { data, loading, fetchData}
}

export default useTodos