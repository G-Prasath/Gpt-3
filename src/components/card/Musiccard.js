import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, useMediaQuery } from '@mui/material';
export default function MediaControlCard({ props }) {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Grid>
      {
        matches ?(
          <Card sx={{display: 'block', margin: '10px 20px'}}>
            <CardMedia
            component="img"
            sx={{ width: '100%' }}
            image={props.fetchImg}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.disc}
              </Typography>
            </CardContent>
            <Box>
              <Button sx={{margin: '10px'}} variant="contained">Update</Button>
              <Button variant="contained">Delete</Button>
            </Box>
          </Box>
        </Card>
        ):(
          <Card sx={{display: 'flex', margin: '10px 20px'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.disc}
              </Typography>
            </CardContent>
            <Box>
              <Button type='submit' sx={{margin: '10px'}} variant="contained">Update</Button>
              <Button type='submit' variant="contained">Delete</Button>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={props.fetchImg}
            alt="Live from space album cover"
          />
        </Card>
        )
      }

    </Grid>
  );
}