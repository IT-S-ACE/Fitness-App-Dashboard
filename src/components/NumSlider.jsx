import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

const NumSlider = ({ Label, value, onChange, maxLength }) => {

    const handleSliderChange = (event, newValue) => {
        onChange(newValue);
    };

    const handleInputChange = (event) => {
        onChange(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            onChange(0);
        } else if (value > maxLength) {
            onChange(maxLength);
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom className='flex'>
                {Label}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        color='secondary'
                        aria-labelledby="input-slider"
                        max={maxLength} // Set the maximum value for the slider
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: maxLength, // Set the maximum value for the input
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default NumSlider;
