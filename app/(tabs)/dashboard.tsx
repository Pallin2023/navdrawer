import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class dashboard extends Component {
  render() {
    return (
      <SafeAreaView>
      <View style={styles.container}>
        <Text>dashboard</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum iusto quis sequi dignissimos! Ut, error placeat! Autem, laudantium blanditiis, ex porro maiores minus quis iste nulla eligendi officia pariatur?
        Deserun rattione eius ut eum quam nobis, voluptate iure autem quas itaque consectetur quo dolor aliquam quae nostrum accusantium ipsum reiciendis doloremque eaque a illum quod nesciunt impedit dolorem! Accusamus.
        Molestias sed nam optio incidunt quia facere autem placeat maxime natus praesentium veritatis, molestiae ullam expedita voluptatem at asperiores, eveniet nesciunt, magnam quae perferendis id quaerat. Ea nesciunt tenetur eius?</Text>
          <Image source={require('../../assets/images/pet2.jpg')} style={{width:300,height:250}}>
      
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