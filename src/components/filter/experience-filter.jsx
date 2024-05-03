import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setMinExperience } from '../../store/reducer';
import { useDispatch } from 'react-redux';

export default function ExperienceFilter() {
  const [minexp, setMinexp] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMinexp(parseInt(event.target.value));
    dispatch(setMinExperience(parseInt(event.target.value)));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="experience-label">Age</InputLabel>
        <Select
          labelId="experience-label"
          id="experience-select"
          value={minexp}
          label="Experience"
          onChange={handleChange}
        >
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
    </Box>
  );
}