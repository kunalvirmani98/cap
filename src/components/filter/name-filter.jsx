import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setCompanyName } from '../../store/reducer';


export default function NameFilter() {
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    function handleChange(e) {
        setName(e.target.value);
        dispatch(setCompanyName(e.target.value));
    }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={name} onChange={handleChange}/>
    </Box>
  );
}
