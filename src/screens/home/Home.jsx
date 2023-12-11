import React, { useEffect, useState } from 'react'
import './home.css'
import { Grid } from '@mui/material'
import ImgMediaCard from '../../components/card/Card'

const Home = () => {
  const [post, setPost] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchApis = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')

      const jsonResponse = await response.json()

      if (response.ok) {
        setPost(jsonResponse)
      }

      if (!response.ok) {
        setError(jsonResponse.error)
        console.log(error);
      }

    }
    fetchApis();
  }, [])

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-evenly', marginTop: '40px' }}>
        {
          post && post.map((data, index) => {
            return (
              <ImgMediaCard key={index} id={data.id} title={data.title} disc={data.body} />
            )
          })
        }
      </Grid>
    </>
  )
}

export default Home