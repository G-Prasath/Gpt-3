import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard({id, title, disc}) {
  const fetchImg = "https://api.slingacademy.com/public/sample-photos/"+id+".jpeg"
  
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/post/${id}`, {state:{id, title, disc, fetchImg}})
  }
  
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
        <Button variant="outlined" size="small" onClick={handleClick}>View</Button>
      </CardActions>
    </Card>
  );
}