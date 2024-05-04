import { useSelector, useDispatch } from 'react-redux';
import { setRemote } from '../../store/reducer';
import { Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const preferences = [
  'remote', 'on-site', 'hybrid'
];

export default function LocationFilter() {
    const [preference, setPreference] = React.useState([]);
    const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPreference(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    dispatch(setRemote(typeof value === 'string' ? value.split(',') : value))
  };

  const handleDelete = (value) => {
    let pref = preference.filter((_preference) => _preference !== value );

    setPreference(pref);
    dispatch(setRemote(pref));
  }

    return (
            <div>
                {/* {preference.length > 0 && <p className='label'>Remote</p>} */}
                <FormControl size='small'>
                    <InputLabel id="demo-multiple-chip-label">Remote</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="location-multi-select"
                    multiple
                    value={preference}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} size="sm" onMouseDown={(e) => e.stopPropagation()} onDelete={(e) => handleDelete(value)} shape='square'/>
                        ))}
                        </Box>
                    )}
                    >
                    {preferences.filter((name) => !preference.includes(name)).map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
    )
}