import { Grid } from '@mui/material';
import { React, useEffect, useState } from 'react';
import InvoiceCard from '../components/InvoiceCard';
import { paperStyle } from '../styles';

function About() {

  const [About, setAbout] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setAbout(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API}/edit/about/639b9033edfa6a4d68b60125`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ x: About }),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Error updating About:', error);
      });
  };

    const fetchAbout = () => {
        fetch(`${process.env.REACT_APP_API}/about/639b9033edfa6a4d68b60125`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setAbout(data.data.content)
            console.log(data.data)
          })
    }

    useEffect(()=>{
        fetchAbout();
    },[])

    return (
        <Grid style={paperStyle}>
        <Grid>
            <h2>About</h2>
        </Grid>
        <Grid container spacing={3}>
        <div style={{marginLeft: 20, marginTop: 20}}>
          <form onSubmit={handleSubmit}>
            <textarea
              name="About"
              value={About}
              onChange={handleChange}
              rows={70}
              cols={100}
            />
            <Grid>
            <button type="submit">Submit</button>
            </Grid>
          </form>
        </div>
        </Grid>
        </Grid>
    )

}


export default About