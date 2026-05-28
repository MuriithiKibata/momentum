import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '@/styles/global'
import { colors } from '@/colors'

function Navbar() {
  return (
    <View style={style.container}>
        <Text style={globalStyles.title}>
            ZenTask
        </Text>
        <View style={style.circleContainer}>
            <Text>
                MK
            </Text>
        </View>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 50,
        paddingInline: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.slate,
    },
    circleContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.slate,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    }


})

export default Navbar