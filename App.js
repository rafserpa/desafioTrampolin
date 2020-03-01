/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Fragment,useState,useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  HeaderBox:{
    backgroundColor: 'steelblue',
    height: 100,

  },
  HeaderText:{
    color:'white',
    textAlign: "center",
    
    fontSize:30,
    marginTop:30,
  },
  Row:
  {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 4,
    borderWidth:0.5,
    borderColor: 'grey',
    height:75,
    

  },
  Number:{
    marginTop:13,
    fontWeight:'bold',
    marginLeft:15,
    marginRight:15,



  },

  Symbol:{
    
    marginTop:13,
    marginLeft:20,
    marginRight:5,
    fontWeight:'bold',
  },

  Name:{
    marginTop:13,

  },
  Price:
  {
    marginTop: 10,
    marginLeft:'auto',
    marginRight:15,
    fontWeight:'bold'
    
  },

});


const App = () =>{

  const [crypto,setCrypto] = useState([]);



  useEffect(()=>{
    const lerCrypto = async() =>{
      const cryptoCoins = await fetch("https://api.coinmarketcap.com/v1/ticker/?limit=15");
      const cryptoJson  = await cryptoCoins.json();
      setCrypto(cryptoJson);
  }
  
    
    lerCrypto();



  },[])



  return (
    <ScrollView>

      <View style = {styles.HeaderBox}>
        <Text style = {styles.HeaderText}>
          Desafio Trampolin
        </Text>
      </View>
    
    
    
    
    
      <FlatList
        data={crypto}
        renderItem={({ item }) => 
          <View style = {styles.Row} >
            <Text style = {styles.Number}>
              {item.rank}
            </Text>

            <Text style = {styles.Symbol}>
              {item.symbol}
            </Text>

            <Text style = {styles.Name}>
              {`(${item.name})`}
            </Text>

            <Text style = {styles.Price}>
              {`$${item.price_usd}`}
            </Text>

          </View>
      }
        keyExtractor={item => item.id}
      />
      
    
    </ScrollView>
  );
    
};

export default App;
