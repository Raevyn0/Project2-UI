import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="deck card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Other information
        </Typography>
      </CardContent>
    </Card>
  );
}
