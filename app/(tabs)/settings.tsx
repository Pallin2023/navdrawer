import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default class settings extends Component {
  render() {
    return (
      <SafeAreaView>
      <View style={styles.container}>
        <Text> Settings </Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro illo ex quam eos impedit dolores laudantium non sed, consequatur tenetur minus labore, inventore sit aperiam cumque. Accusamus, eos et.
        Consequatur facere dignissimos dolor in corporis veritatis excepturi omnis saepe odit reprehenderit, iusto labore dolores hic, vitae fuga, facilis nemo at voluptas. Nesciunt aliquid hic eligendi asperiores quo fuga quod?</Text>
            <Link href="/">
                <TouchableOpacity>
                  <Text>
                    Ir a Inicio
                  </Text>
                </TouchableOpacity>
            </Link>
          <Image source={require('../../assets/images/pet1.jpg')} style={{width:300,height:250}}>

          </Image>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
   SafeAreaView:{
    flex:1,
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    
  }
})
