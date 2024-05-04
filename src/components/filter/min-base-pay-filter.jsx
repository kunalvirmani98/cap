import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setMinExperience } from '../../store/reducer';
import { useDispatch } from 'react-redux';

export default function MinBasePayFilter() {
  const [minbasepay, setMinbasepay] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMinbasepay(event.target.value);
    dispatch(setMinExperience(event.target.value));
  };

  return (
      <FormControl sx={{ minWidth: 300 }} size="small">
        <InputLabel id="min-pay-label">Min Base Pay</InputLabel>
        <Select
          labelId="min-pay-label"
          id="min-pay-select"
          value={minbasepay}
          label="Experience"
          onChange={handleChange}
        >
          <MenuItem value={0}>0L</MenuItem>
          <MenuItem value={10}>10L</MenuItem>
          <MenuItem value={20}>20L</MenuItem>
          <MenuItem value={30}>30L</MenuItem>
          <MenuItem value={40}>40L</MenuItem>
          <MenuItem value={50}>50L</MenuItem>
          <MenuItem value={60}>60L</MenuItem>
          <MenuItem value={70}>70L</MenuItem>
        </Select>
      </FormControl>
  );
}