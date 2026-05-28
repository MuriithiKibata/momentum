import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cards from '@/components/Cards';
function index() {
  return (
    <View style={styles.container}>
    
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBlock: 40,
    paddingInline: 20,
  },
});

export default index