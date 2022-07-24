import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
    subscription: '',
    page: this.props.page,
  }
  handlKey = (e) => {
    if (e.key === 'Enter') {
      this.setState(
        () => ({ page: 1 }),
        () => {
          this.props.changeMovies(
            this.state.search,
            this.state.type,
            this.state.page,
          )
        },
      )
    }
  }
  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type, page: 1 }),
      () => {
        this.props.changeMovies(
          this.state.search,
          this.state.type,
          this.state.page,
        )
      },
    )
    // this.setState({ [e.target.name]: e.target.checked })
  }
  render() {
    return (
      <div className="row">
        {console.log(this.props.pages)}
       
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
            data-type="tv"
            value="tv"
            checked={this.state.type === 'tv'}
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
        <div className="col s12">
        <Stack spacing={2}>
          {!!this.props.pages && (
            <Pagination
              showFirstButton
              showLastButton
              sx={{ marginY: 4, marginX: 'auto' }}
              count={+this.props.pages}
              page={this.state.page}
              onChange={(_, num) => {
                this.setState(
                  () => ({ page: num }),
                  () => {
                    this.props.changeMovies(
                      this.state.search,
                      this.state.type,
                      this.state.page,
                    )
                  },
                )
              }}
            />
          )}
        </Stack>
        </div>
       
      </div>
    )
  }
}
export { Search }
