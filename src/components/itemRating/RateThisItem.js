
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { changeRating } from '../../redux/frontPageCollection/frontPageCollectionSlice';

export default function RateThisItem({ id }) {
    const [value, setValue] = useState(2);
    const dispatch = useDispatch();

    const adjustRating = (event, newValue) => {
        setValue(newValue)
    }

    const newRating = { id, value };
    dispatch(changeRating(newRating));


    return (
        <Box sx={{ '& > legend': { mt: 2 }, }}>
            <Typography component="legend">Rate This Item:</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={adjustRating}
            />

        </Box>
    )
}
