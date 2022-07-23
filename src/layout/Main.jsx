import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
const API_KEY = process.env.REACT_APP_API_KEY
class Main extends React.Component {
  state = {
    movies: [],
    searchValue: '',
    loading: true,
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(
        (data) => {
          this.setState({ movies: data.Search, loading: false })
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
  changeMovies = (inputValue, type = 'all') => {
    console.log(inputValue)
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}${
        type !== 'all' ? `&type=${type}` : ''
      }`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(
        (data) => {
          this.setState({ movies: data.Search, loading: false })
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
      <main className="container content">
        <Search changeMovies={this.changeMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    )
  }
}

export { Main }
