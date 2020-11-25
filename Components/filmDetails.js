import React from 'react'
import {StyleSheet,View,Text,Image,ActivityIndicator,ScrollView} from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'
import { getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'



class FilmDetail extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      film: undefined,
      isLoading:true
    }
  }
  componentDidMount(){
    getFilmDetailFromApi(this.props.route.params.idFilm)
    .then(data => {
      this.setState({
      film:data,
      isLoading:false
    })} )
  }
  _displayFilm(){
    const film = this.state.film
    if (film != undefined){
      return(
        <ScrollView style={styles.scroll_container}>
          <Image source={{
          uri: getImageFromApi(film.backdrop_path)
        }} style={styles.backdrop_path}/>
          <Text style={styles.film_title}>{film.title}</Text>
          <Text style={styles.film_description}>{film.overview}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')} </Text>
          <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}</Text>
          <Text style={styles.default_text}>Companie(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}</Text>
        </ScrollView>
      ) 
    }
  }
  _displayLoading(){
    if (this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'color='blue'/>
        </View>
      )

    }
  }
  render(){
    const {idFilm}= this.props.route.params
    console.log(this.props.route.params);
    return(
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroll_container:{
    flex:1
  },
  backdrop_path:{
    height: 170,
    margin: 5
  },
  film_title:{
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'

  },
  film_description:{
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
    default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

export default FilmDetail