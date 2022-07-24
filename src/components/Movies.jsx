import * as React from 'react'
import { Movie } from './Movie'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

export default function Movies(props) {
  const { movies = [] } = props
  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {movies.length ? (
            movies.map((movie) => {
              return <Movie key={movie.id} {...movie} />
            })
          ) : (
            <Grid item xs={12}>
              <h4>Ничего не найдено</h4>
            </Grid>
          )}
        </Grid>
      </Box>
      
    </Container>
  )
}

export { Movies }
