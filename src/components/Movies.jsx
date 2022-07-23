import { Movie } from './Movie'

function Movies(props) {
  const { movies = [] } = props
  return (
    <div className="Movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />
        })
      ) : (
        <h4>Ничего не найдено</h4>
      )}
    </div>
  )
}

export { Movies }
