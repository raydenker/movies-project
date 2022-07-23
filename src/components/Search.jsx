import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
    subscription: '',
  }
  handlKey = (e) => {
    if (e.key === 'Enter') {
      this.props.changeMovies(this.state.search, this.state.type)
    }
  }
  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.changeMovies(this.state.search, this.state.type)
      },
    )
    // this.setState({ [e.target.name]: e.target.checked })
  }
  render() {
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
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handlKey}
            />
            <button
              className="btn"
              onClick={() =>
                this.props.changeMovies(this.state.search, this.state.type)
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
            checked={this.state.type === 'all'}
            onChange={this.handleFilter}
          />
          <span>All</span>
        </label>

        <label className="col s4">
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            value="series"
            checked={this.state.type === 'series'}
            onChange={this.handleFilter}
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
            checked={this.state.type === 'movie'}
            onChange={this.handleFilter}
          />
          <span>Movie</span>
        </label>
      </div>
    )
  }
}
export { Search }
