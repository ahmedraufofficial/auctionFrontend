import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { TextField, Box } from '@mui/material';

export default function ClassifiedCard(props) {  
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  }


  const [openInputs, setOpenInputs] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const [sellerContact, setSellerContact] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');


  
  const vehicle = props?.data

  return(<Card sx={{ width: "17em" }}>
    {
      props?.data?.Images ? props?.data?.Images.length > 0 ? <CardMedia
      component="img"
      height="200px"
      width="100%"
      image={`${process.env.REACT_APP_API}/images/${props?.data?.Images[0]}`}
      alt="Car Image"
    /> : <></> : <></>
    }
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {`${props?.data?.Vehicle_Manufacturer} ${props?.data?.Model}  ${props?.data?.Year}  `}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     Name: {props?.data?.Seller_Name}  
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Number: {props?.data?.Seller_Contact}  
    </Typography>
  </CardContent>
  <CardActions> 

    </CardActions>
</Card>)

}
    /* <Card sx={{ width: "17em" }}>
      <CardMedia
        component="img"
        height="200px"
        width="100%"
        image={`${process.env.REACT_APP_API}/images/${props?.data?.Images[0]}`}
        alt="Car Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props?.data?.Vehicle_Manufacturer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props?.data?.Model}  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props?.data?.Manufacturing_Year}  
        </Typography>
      </CardContent>
      <CardActions> 
        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link style={linkStyle} underline="none" to={`/vehicle/edit/${props?.data?._id}`}><Typography textAlign="center">Edit</Typography></Link>
        </Button>
        <Button onClick={handleButtonClick} sx={{ my: 2, display: 'block' }}>
            <Typography style={{color: 'red'}} textAlign="center">Push to Classified</Typography>
        </Button>
        </CardActions>
        <CardActions>
        {openInputs && (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Seller Name"
            value={sellerName}
            onChange={(e) => handleInputChange(e, setSellerName)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Seller Contact"
            value={sellerContact}
            onChange={(e) => handleInputChange(e, setSellerContact)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Condition"
            value={condition}
            onChange={(e) => handleInputChange(e, setCondition)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => handleInputChange(e, setPrice)}
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      )}
      </CardActions>
    </Card> */

