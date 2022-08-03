import React, {useState} from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Search = (props) => {
  const {changeMovies = Function.prototype, pages, pagesAll
  } = props
 
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')
  const [page, setPage] = useState(pages)
  // const [search, setSearch] = useState('')


  const handlKey = (e) => {
    if (e.key === 'Enter') {   
      setPage(1)
      changeMovies(
        search,
        type,
        1,
      )     
    }
  }
  const handleFilter = (e) => {   
      setType(e.target.dataset.type);     
      setPage(1)
      changeMovies(
        search,
        e.target.dataset.type,
         1,
       );   
  }

    return (
      <div className="row">       
        <div className="col s12 Search">
          <div className="input-field">
            <input
              name="search"
              id="email_inline"
              type="search"
              placeholder="Search"
              className="validate"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handlKey}
            />
            <button
              className="btn"
              onClick={() =>
                changeMovies(search, type, page)
              }
            >
              Search
            </button>
          </div>
        </div>

        <label className="col s4">
          <input
            className="with-gap"
            name="type"
            type="radio"
            value=""
            data-type="all"
            checked={type === 'all'}
            onChange={handleFilter}
          />
          <span>All</span>
        </label>

        <label className="col s4">
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="tv"
            value="tv"
            checked={type === 'tv'}
            onChange={handleFilter}
          />
          <span>Series</span>
        </label>

        <label className="col s4">
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            value="movie"
            checked={type === 'movie'}
            onChange={handleFilter}
          />
          <span>Movie</span>
        </label>
        <div className="col s12">
        <Stack spacing={2}>
          {!!pagesAll && (
            <Pagination
              showFirstButton
              showLastButton
              sx={{ marginY: 4, marginX: 'auto' }}
              count={+pagesAll}
              page={page}
              onChange={(_, num) => {
                console.log(num);
                setPage(num)
                changeMovies(
                search,
                 type,
                 num,
                )               
              }}
            />
          )}
        </Stack>
        </div>
       
      </div>
    )
 
}
export { Search }
