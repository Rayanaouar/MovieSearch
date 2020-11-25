import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from '../Components/filmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [],
      isLoading: false
    }
    this.searchText = ""
    this.page = 0
    this.totalPage = 0

  }
  _loadFilms() {
    console.log(this.searchText)
    if (this.searchText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchText, this.page + 1)
        .then(
          data => {
            this.page = data.page
            this.totalPage = data.total_pages
            this.setState({
              films: [...this.state.films, ...data.results],
              isLoading: false

            })
          })
    }

  }
  _searchTextInputCahnged(text) {
    this.searchText = text
  }


  _displayLoading() {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size='large' color="blue" />
      </View>
    )
  }
  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate('Detail',{ idFilm : idFilm })
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => { 
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
        this._loadFilms() 
    })
}

  render() {
    console.log(this.state.isLoading);

    return (
      <View style={styles.main_content}>
        <TextInput
          placeholder="Titre du film"
          onSubmitEditing={() => this._searchFilms()}
          onChangeText={(text) => { this._searchTextInputCahnged(text) }}
          style={styles.textinput}
        />
        <Button style={{ height: 50}} title="Rechercher" onPress={() => this._searchFilms()} />
        {!this.state.isLoading
          ?
          <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.page < this.totalPage) {
                this._loadFilms()
              }
            }}
          />
          : this._displayLoading()
        }

      </View>

    )
  }
}


const styles = StyleSheet.create({
  main_content: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 58,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search



