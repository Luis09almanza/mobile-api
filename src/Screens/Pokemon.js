import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList , StyleSheet, Image} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ImageBackground } from 'react-native';

const Image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1200px-International_Pokémon_logo.svg.png"


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
        <View style={styles.buscador}>
          <Searchbar/>
          <Image source={{uri: Image_url}} style={styles.Image}/>
          <FlatList
            data={this.state.pokemon}
            renderItem={
              ({item}) =><Text style={styles.pokemon_name}>{item.name}</Text>
            }
            keyExtractor={(item, index) => index.toString()}
          />        
        </View>
      </View>
    );
    
  }
}
const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
  },
  buscador:{
    padding: 15,
    backgroundColor:"black"
  },
  pokemon_name:{
    fontSize:20,
    alignSelf:"center",
    padding:5,
    margin:5,
    fontStyle: "italic",
    color:"yellow"
  },
  Image:{
    width:"100%",
    height:120,
    alignSelf:"center"
  }

})