import { useDispatch } from 'react-redux';
import { setRole } from '../../store/reducer';
import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const role_preferences = {
  engineering : ['Backend', 'Frontend'],
  hr : ['hr']
};

export default function RoleFilter() {
    const [role, setRoleLocal] = React.useState([]);
    const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setRoleLocal(typeof value === 'string' ? value.split(',') : value);
    dispatch(setRole(typeof value === 'string' ? value.split(',') : value))
  };

  const handleDelete = (value) => {
    let ro = role.filter((_role) => _role !== value);
    setRoleLocal(ro);
    dispatch(setRole(ro));
  }

    return (
          <div>
            {/* {role.length > 0 && <p className='label'>Role</p>} */}
            <FormControl sx={{ m: 1, width: 300 }} size="small">
                <InputLabel id="role-multi-label">Role</InputLabel>
                <Select
                labelId="role-multi-label"
                id="role-multi-select"
                multiple
                value={role}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} onMouseDown={(e) => e.stopPropagation()} onDelete={(e) => handleDelete(value)}/>
                    ))}
                    </Box>
                )}
                {...(role && {
                    // When the user has selected a value, the button is displayed, and the select indicator is removed.
                    enddecorator: (
                      <Button
                        size="sm"
                        variant="plain"
                        color="neutral"
                        onMouseDown={(event) => {
                          // stops the popup from appearing when this button is clicked
                          event.stopPropagation();
                        }}
                        onClick={() => {
                          setRoleLocal(null);
                          // action.current?.focusVisible();
                        }}
                      >
                        X
                      </Button>
                    ),
                    indicator: null,
                  })}
                >
                  <ListSubheader>Engineering</ListSubheader>
                  {role_preferences['engineering'].filter((name) => !role.includes(name)).map((name) => (
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