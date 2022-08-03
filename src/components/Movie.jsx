import * as React from 'react'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
function Movie(props) {
  const {
    name: Name,
    title: Title,
    release_date: year,
    first_air_date: first_ate,
    id: Id,
    media_type: type,
    backdrop_path: poster,
  } = props
  return (
    <Grid item xs={4} sm={4} md={4} key={Id}>
      <Item>
        <Card>
          <CardActionArea>
            {poster ? (
              <CardMedia
                component="img"
                height="480"
                image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
                alt={Name || Title}
              />
            ) : (
              <CardMedia
                component="img"
                height="540"
                image={`https://via.placeholder.com/300x451?text=${
                  Name || Title
                }`}
                alt={Name || Title}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {Name || Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {year || first_ate}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>

    // <>
    //   <div className="card-image">
    //     {poster ? (
    //       <img
    //         src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}`}
    //         alt={Name || Title}
    //       />
    //     ) : (
    //       <img
    //         src={`https://via.placeholder.com/300x451?text=${
    //           Name || Title
    //         }`}
    //         alt={Name || Title}
    //       />
    //     )}
    //     <span className="card-title">{Name || Title}</span>
    //   </div>
    //   <div className="card-content row">
    //     <span className="col s12 m6">{type}</span>
    //     <span className="right">{year || first_ate}</span>
    //     <span className="col s12 m6">{Id}</span>
    //   </div>
    // </>
  )
}
export { Movie }
