import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { setMinExperience } from '../../store/reducer';
import { useDispatch } from 'react-redux';

export default function ExperienceFilter() {
  const [minexp, setMinexp] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMinexp(parseInt(event.target.value));
    dispatch(setMinExperience(parseInt(event.target.value)));
  };

  const handleClose = () => {
    console.log('Close icon clicked');
    // Add your logic here to handle the close icon click
  };

  return (
    <div>
        {/* <p className='label'>{(minexp !== '') && 'Experience'}</p> */}
        <FormControl size='small' sx={{ marginRight : '8px' }}>
            <InputLabel id="experience-label">Experience</InputLabel>
            <Select
            labelId="experience-label"
            id="experience-filter"
            // IconComponent={"X"}
            value={minexp}
            label="Experience"
            // onClose={handleClose}
            onChange={handleChange}
            >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            </Select>
        </FormControl>
    </div>
  );
}