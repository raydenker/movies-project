function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props
  return (
    <div className="card Movie">
      <div className="card-image">
        {poster ? (
          <img src={poster} alt={title} />
        ) : (
          <img
            src={`https://via.placeholder.com/300x451?text=${title}`}
            alt={title}
          />
        )}
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content row">
        <span className="col s12 m6">{type}</span>
        <span className="right">{year}</span>
        <span className="col s12 m6">{id}</span>
      </div>
    </div>
  )
}
export { Movie }
