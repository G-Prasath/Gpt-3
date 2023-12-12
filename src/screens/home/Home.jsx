import React from 'react'
import './home.css'
import Grid from '@mui/material/Grid'
import ImgMediaCard from '../../components/card/Card'
import Getdata from '../../hooks/Getdata'

const Home = () => {
const {post, error, ispending} = Getdata('https://jsonplaceholder.typicode.com/posts')

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-evenly', marginTop: '40px' }}>
        {
          post && post.slice(0, 10).map((data, index) => {
            return (
              <ImgMediaCard key={index} id={data.id} title={data.title} disc={data.body} />
            )
          })
        }
        {
          error && <h3>{error}</h3>
        }
        {
          ispending && <h3>Loading ...</h3>
        }
      </Grid>
    </>
  )
}

export default Home