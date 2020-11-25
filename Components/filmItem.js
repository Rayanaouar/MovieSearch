import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends Component {
  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => (displayDetailForFilm(film.id))}>
        <Image style={styles.image} source={{
          uri: getImageFromApi(film.poster_path)
        }} />
        <View style={styles.content_container}>
          <View style={styles.header_view}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>{film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    marginTop: 5,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor:"#e2e2e2",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 2
  },
  content_container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 6
  },
  header_view:
  {
    flex: 3,
    flexDirection: "row"

  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'

  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FilmItem