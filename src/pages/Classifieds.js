import { Grid } from '@mui/material';
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassifiedCard from '../components/ClassifiedCard';
import { paperStyle } from '../styles';

export default function Classifieds() {
    const navigate = useNavigate();
    const [Classifieds, setClassifieds] = useState([])

    const fetchData = () => {
        fetch(`${process.env.REACT_APP_API}/classifieds`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setClassifieds(data.data)
          })
      }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Grid style={paperStyle}>
                <Grid>
                    <h2>Classifieds</h2>
                </Grid>
                <Grid container spacing={24}>
                    {Classifieds.length > 0 && (
                        Classifieds.map((classified) => (
                            <Grid item>
                                <ClassifiedCard data={classified} key={classified._id} />
                            </Grid>
                        ))
                    )}

                </Grid>
        </Grid>
    )
}
