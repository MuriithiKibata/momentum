import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Cards from '@/components/Cards';

import { colors } from '@/colors';
import Feather from "@expo/vector-icons/Feather";
import { router } from 'expo-router';
import useTodos from '../Queries/todosQuery';
import { Todo } from '@/types';

function index() {

const { loading, data} = useTodos()

  if (loading) {
    return (
   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Text>Loading Session...</Text>
   </View>
    )
  }



  return (
    <View style={styles.container}>
      {data?.map((todo:Todo) => (

        <Cards
          key={todo.id}
          todo={todo}
          title={todo.Name}
          description={todo.Description ?? undefined}
          priority={todo.Priority}
          completed={todo.Completed}
        />
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/new_task");
        }}
      >
        <Feather name="plus" size={24} color="#FFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 15,
    flex: 1,
    paddingBlock: 40,
    paddingInline: 20,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 15,
    width: "20%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    right: 20,
  }
});

export default index