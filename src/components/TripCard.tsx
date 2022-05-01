import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TripCardType } from "../types/TripTypes"

export default function TripCard({ title, img, checkIn, unitType }: TripCardType) {
  return (
    <Card>
      <CardMedia component="img" image={`https://cms.inspirato.com/${img}?width=500`} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Check-in Date : ${checkIn}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Unit Type : ${unitType}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
