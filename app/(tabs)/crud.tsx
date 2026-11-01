import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1DIl3gFgzghgw1pnlRTaPCmA_r871ots",
  authDomain: "android-firebase2-58a81.firebaseapp.com",
  projectId: "android-firebase2-58a81",
  storageBucket: "android-firebase2-58a81.firebasestorage.app",
  messagingSenderId: "975820239162",
  appId: "1:975820239162:web:bcd5a5d1cca3b3f3e66003",
  measurementId: "G-5J85S8578G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default function crud() {
    const [name, setName]=useState<string>("");
    const [email, setEmail]=useState<string>("");
    const [age, setAge]=useState<string>("");
    const[userInfo, setUserInfo]=useState<any | undefined>(null);

const handleCreate=async()=>{
  try {
    await setDoc(doc(db, "employees", "userID"),{
      Username:name,
      Email:email,
      Age:age
    });
  }catch(error:any){
    console.log("Erro al craer Documento",error);
  }
}

const handleRead=async()=>{
  try{
const docRef = doc(db, "employees", "userID");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setUserInfo(docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  }catch(error:any){
    console.log("Erro en Read Document.", error);
  }
}

const handleUpdate=async()=>{
  
}

const handleDelete=async()=>{
  try{
    await deleteDoc(doc(db, "employees", "userID"));
  }catch(error:any){
    console.log("Erro en handDelete",error);
  }
}

  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={{color:'yellow'}}>Crear Firebase CRUD</Text>
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Coloca tus Nombres'
            style={styles.input}
            onChangeText={(text)=>setName(text)}
        >
        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Coloca tu Correo Electronico'
            keyboardType='email-address'
            style={styles.input}
            onChangeText={(text)=>setEmail(text)}
        >
        </TextInput>
      </View>
         <View style={styles.inputContainer}>
        <TextInput
            placeholder='Coloca tu Edad'
            keyboardType='number-pad'
            style={styles.input}
            onChangeText={(text)=>setAge(Number(text))}
        >
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.delete} onPress={handleCreate}>
                <Text style={{color:'white'}}>Create</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.delete} onPress={handleRead}>
                <Text style={{color:'white'}}>Read</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.delete} onPress={handleUpdate}>
                <Text style={{color:'white'}}>Update</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.delete} onPress={handleDelete}>
                <Text style={{color:'white'}}>Delete</Text>
            </TouchableOpacity>
      </View>
         <View style={styles.datosContainer}>
        <Text style={{color:"white",fontSize:30}}>{userInfo?.Username}</Text>
        <Text style={{color:"white",fontSize:30}}>{userInfo?.Email}</Text>
        <Text style={{color:"white",fontSize:30}}>{userInfo?.Age}</Text>
      </View>
      </View>
   
    </View>
  
  )
}
const styles = StyleSheet.create({
   SafeAreaView:{
    flex:1,
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:'darkblue',
  },
  content:{
    flex:1,
    marginTop:50,
    marginHorizontal:15,
  },
  inputContainer:{
    marginTop:20,
  },
  input:{
    backgroundColor:'#fff',
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
  },
  buttonContainer:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  delete:{
    backgroundColor:'black',
    padding:10,
    margin:10,
    borderRadius:5,
  },
  datosContainer:{
    flex:1,
    marginHorizontal:10,
    marginVertical:10,
    padding:10
  },

})
