import { Grid } from '@mui/material';
import { React, useEffect, useState } from 'react';
import InvoiceCard from '../components/InvoiceCard';
import { paperStyle } from '../styles';

function Toc() {

  const [Toc, setToc] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setToc(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API}/edit/toc/639b9778edfa6a4d68b60126`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ x: Toc }),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Error updating Toc:', error);
      });
  };

    const fetchToc = () => {
        fetch(`${process.env.REACT_APP_API}/toc/639b9778edfa6a4d68b60126`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setToc(data.data.content)
            console.log(data.data)
          })
    }

    useEffect(()=>{
        fetchToc();
    },[])

    return (
        <Grid style={paperStyle}>
        <Grid>
            <h2>Toc</h2>
        </Grid>
        <Grid container spacing={3}>
        <div style={{marginLeft: 20, marginTop: 20}}>
          <form onSubmit={handleSubmit}>
            <textarea
              name="Toc"
              value={Toc}
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


export default Toc