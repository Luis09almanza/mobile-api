import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useMemo} from 'react';
import { Text, View, FlatList,TouchableWithoutFeedback  } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class Pokemons extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      pokemon: [],
      url:'https://pokeapi.co/api/v2/pokemon/'
    }
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () =>{

    this.setState({loading:true})

    fetch(this.state.url)
    .then(res => res.json())
    .then( res=>{

        this.setState({
          pokemon: res.results,
          url: res.next,
          loading:false
        })
    });
  }


  render(){
    if(this.state.loading){

    return (
      <View>
        <Text>Descargando pokemon</Text>
        <StatusBar style="auto" />
      </View>
    );
    }
    return (
      
      <View>
        <Searchbar
          placeholder='Search Pokemon'
          data={this.state.pokemon}
        />
        <FlatList
          data={this.state.pokemon}
          renderItem={
            ({item}) => <TouchableWithoutFeedback
            onPress={()=>{
              console.log(item.name);
            }}
           ><Text>{item.name}</Text></TouchableWithoutFeedback>
          }
          keyExtractor={(item, index) => index.toString()}
          
        />

        
      </View>
    );
    
  }
}


