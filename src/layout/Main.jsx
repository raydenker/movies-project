import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
// const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY2 = process.env.REACT_APP_API_KEY2
const url = 'https://api.themoviedb.org/3/'
class Main extends React.Component {
  state = {
    movies: [],
    searchValue: '',
    loading: true,
  }

  componentDidMount() {
    fetch(`${url}trending/all/week?api_key=${API_KEY2}`)
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json()
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({ movies: data.results, loading: false })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ loading: false })
      })
  }
  changeMovies = (inputValue, type = 'all') => {
    this.setState({ loading: true })  
    let typeAll = ''
    let searchUrl =''
    if (inputValue) {
      typeAll = 'multi'
      searchUrl = `${url}search/${type !== 'all' ? `${type}` : `${typeAll}`}?api_key=${API_KEY2}${inputValue ? `&query=${inputValue}` : ''}`
    } else {
      typeAll = 'all'
      searchUrl = `${url}trending/${type !== 'all' ? `${type}` : `${typeAll}`}/week?api_key=${API_KEY2}`
    } 

    fetch(searchUrl)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(
        (data) => {
          this.setState({ movies: data.results, loading: false })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      )
  }

  render() {
    const { movies, loading } = this.state
    return (
      <main>
        <Search changeMovies={this.changeMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    )
  }
}

export { Main }
