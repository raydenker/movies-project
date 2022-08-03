import React, {useState, useEffect} from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

// const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY2 = process.env.REACT_APP_API_KEY2
const url = 'https://api.themoviedb.org/3/'

const  Main = ()=> {
 
  const [movies, setMovies] = useState([])
  // const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)

 
  const changeMovies = (inputValue, type = 'all', page) => {
    // this.setState({ loading: true })
    setLoading(true)
    let typeAll = ''
    let searchUrl = ''
    if (inputValue) {
      typeAll = 'multi'
      searchUrl = `${url}search/${
        type !== 'all' ? `${type}` : `${typeAll}`
      }?api_key=${API_KEY2}${inputValue ? `&query=${inputValue}` : ''}${page !==1 ? `&page=${page}`: ''}`
    } else {
      typeAll = 'all'
      searchUrl = `${url}trending/${
        type !== 'all' ? `${type}` : `${typeAll}`
      }/week?api_key=${API_KEY2}${page !==1 ? `&page=${page}`: ''}`
    }

    fetch(searchUrl)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(
        (data) => {
          setMovies(data.results)
          setLoading(false)
          setPages(data.total_pages)
          setPage(data.page)
        
        },       
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      )
      .catch((err) => {
        setLoading(false)      
      })
  }
  useEffect(()=> {
    fetch(`${url}trending/all/week?api_key=${API_KEY2}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => {
      setMovies(data.results)
      setLoading(false)
      setPages(data.total_pages)
      setPage(data.page)     
    })
    .catch((err) => {
      setLoading(false)      
    })
  }, [])
    return (
      <main>
        <Search changeMovies={changeMovies} pagesAll={pages} pages={page} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
       
      </main>
    )
 
}

export { Main }
