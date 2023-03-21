import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ItemRating({ generalRating, title }) {


    return (
        <Box sx={{ '& > legend': { mt: 2 }, }}>

            <Typography component="legend">{title}</Typography>
            <Rating name="read-only" value={generalRating} readOnly />

        </Box>
    )
}
