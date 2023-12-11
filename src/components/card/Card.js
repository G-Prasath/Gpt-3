import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({id, title, disc}) {
  const fetchImg = "https://api.slingacademy.com/public/sample-photos/"+id+".jpeg"
  
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={fetchImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {disc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}